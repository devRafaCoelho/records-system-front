import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Grid } from '@mui/material';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/useToast.ts';
import { NewPasswordSchema } from '../../schemas/UserSchema.ts';
import { api } from '../../services/api.ts';
import { LoadButton } from '../../styles/styles.ts';
import { NewPasswordData } from '../../types/types.ts';
import Input from '../Input/index.tsx';

export default function NewPasswordForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<NewPasswordData>({
    resolver: yupResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
      newPassword: '',
      confirmNewPassword: ''
    }
  });

  const { toastfy } = useToast();

  const { mutate } = useMutation(api.newPassword, {
    onSuccess: () => {
      navigate('/home');
      toastfy({
        type: 'success',
        message: 'Dados alterados com sucesso!'
      });
    },
    onError: (error: AxiosError<any>) => {
      setLoading(false);
      const responseData = error?.response?.data;

      if (responseData?.error) {
        setError(
          responseData.error.type,
          {
            type: 'manual',
            message: responseData.error.message
          },
          {
            shouldFocus: true
          }
        );
      }
    }
  });

  async function onSubmit(data: NewPasswordData) {
    setLoading(true);
    mutate(data);
  }

  return (
    <Container component="form" maxWidth="sm" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Input
            name="password"
            type="password"
            label="Senha*"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12}>
          <Input
            name="newPassword"
            type="password"
            label="Nova Senha*"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12}>
          <Input
            name="confirmNewPassword"
            type="password"
            label="Confirmar Nova Senha*"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12}>
          <LoadButton size="large" loading={loading} variant="contained" type="submit" fullWidth>
            CONFIRMAR DADOS
          </LoadButton>
        </Grid>
      </Grid>
    </Container>
  );
}
