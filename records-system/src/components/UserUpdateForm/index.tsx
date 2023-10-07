import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Grid } from '@mui/material';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useAppContext from '../../hooks/useAppContext.ts';
import { useToast } from '../../hooks/useToast.ts';
import { UpdateUserSchema } from '../../schemas/UserSchema.ts';
import { api } from '../../services/api.ts';
import { LoadButton } from '../../styles/styles.ts';
import { UpdateUserData } from '../../types/types.ts';
import CPFInput from '../CPFInput.tsx/index.tsx';
import Input from '../Input/index.tsx';
import PhoneInput from '../PhoneInput/index.tsx';

export default function UserUpdateForm() {
  const navigate = useNavigate();
  const { userData, setUserData } = useAppContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue
  } = useForm<UpdateUserData>({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      cpf: '' || undefined,
      phone: '' || undefined,
      email: '',
      password: ''
    }
  });

  const { toastfy } = useToast();

  const { mutate } = useMutation(api.updateUser, {
    onSuccess: (data) => {
      navigate('/home');
      setUserData(data);
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

  async function onSubmit(data: UpdateUserData) {
    data.cpf = data.cpf?.replace(/\D/g, '');
    data.phone = data.phone?.replace(/[^+\d]/g, '');
    setLoading(true);
    mutate(data);
  }

  useEffect(() => {
    if (userData) {
      setValue('firstName', userData.firstName);
      setValue('lastName', userData.lastName);
      setValue('email', userData.email);
      setValue('cpf', userData.cpf ? userData.cpf : '');
      setValue('phone', userData.phone ? userData.phone : '');
    }
  }, [userData]);

  if (!userData) {
    return null;
  }

  return (
    <Container component="form" maxWidth="sm" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <Input
            name="firstName"
            type="text"
            label="Primeiro Nome*"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <Input
            name="lastName"
            type="text"
            label="Último Nome*"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12}>
          <Input name="email" type="email" label="E-mail*" register={register} errors={errors} />
        </Grid>

        <Grid item xs={12}>
          <CPFInput
            name="cpf"
            label="CPF"
            register={register}
            errors={errors}
            initialValue={userData.cpf}
          />
        </Grid>

        <Grid item xs={12}>
          <PhoneInput
            name="phone"
            label="Telefone"
            register={register}
            errors={errors}
            initialValue={userData.phone}
          />
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
            CONFIRMAR DADOS
          </LoadButton>
        </Grid>

        {/* <Grid item xs={12}>
          <Button variant="outlined" size="large" sx={{ marginLeft: 'auto' }}>
            ENCERRAR CONTA
          </Button>
        </Grid> */}
      </Grid>
    </Container>
  );
}
