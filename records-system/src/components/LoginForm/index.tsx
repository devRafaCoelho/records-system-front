import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Grid } from '@mui/material';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useAppContext from '../../hooks/useAppContext.ts';
import { LoginSchema } from '../../schemas/LoginSchema.ts';
import { api } from '../../services/api.ts';
import { LoadButton } from '../../styles/styles.ts';
import { LoginData } from '../../types/types.ts';
import Input from '../Input/index.tsx';

export default function LoginForm() {
  const navigate = useNavigate();
  const { setToken } = useAppContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<LoginData>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const { mutate } = useMutation(api.loginUser, {
    onSuccess: (data: any) => {
      setToken(data.token);
      navigate('/home');
    },
    onError: (error: AxiosError<any>) => {
      setLoading(false);
      const responseData = error?.response?.data;

      if (responseData?.error) {
        const errorData = Object.keys(responseData.error) as Array<keyof LoginData>;

        errorData.forEach((elementData) => {
          setError(
            elementData,
            {
              type: 'manual',
              message: responseData.error[elementData]
            },
            {
              shouldFocus: true
            }
          );
        });
      }
    }
  });

  async function onSubmit(data: LoginData) {
    setLoading(true);
    mutate(data);
  }

  return (
    <Container component="form" maxWidth="sm" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input name="email" type="email" label="E-mail*" register={register} errors={errors} />
        </Grid>

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
          <LoadButton size="large" loading={loading} variant="contained" type="submit" fullWidth>
            ENTRAR
          </LoadButton>
        </Grid>
      </Grid>
    </Container>
  );
}
