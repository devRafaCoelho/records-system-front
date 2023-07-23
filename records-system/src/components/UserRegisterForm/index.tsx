import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Grid } from '@mui/material';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { RegiterUserData } from '../../types/types';
import Input from '../Input';
import PhoneInput from '../PhoneInput';
import { UserSchema } from '../../schemas/UserSchema';
import CPFInput from '../CPFInput.tsx';

export default function UserRegisterForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<RegiterUserData>({
    resolver: yupResolver(UserSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      cpf: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const { mutate } = useMutation(api.registerUser, {
    onSuccess: () => {
      navigate('/login');
    },
    onError: (error: AxiosError<any>) => {
      if ((error as any).response.data?.error) {
        const errorData = Object.getOwnPropertyNames((error as any).response.data?.error)
          .filter((key) => key as keyof RegiterUserData)
          .map((key) => key as keyof RegiterUserData);

        errorData.map((elementData) => {
          setError(
            elementData,
            {
              type: 'manual',
              message: (error as any).response.data?.error[elementData]
            },
            {
              shouldFocus: true
            }
          );
        });
      }
    }
  });

  async function onSubmit(data: RegiterUserData) {
    data.cpf = data.cpf?.replace(/\D/g, '');
    data.phone = data.phone?.replace(/[^+\d]/g, '');
    mutate(data);
  }

  return (
    <Container component="form" maxWidth="sm" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
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
          <CPFInput name="cpf" label="CPF" register={register} errors={errors} />
        </Grid>

        <Grid item xs={12}>
          <PhoneInput name="phone" label="Telefone" register={register} errors={errors} />
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
          <Input
            name="confirmPassword"
            type="password"
            label="Confirmar Senha*"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" size="large" type="submit" fullWidth>
            Confirmar Dados
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
