import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Grid } from '@mui/material';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import DefaultTextField from '../../components/DefaultTextField';
import { registerUserSchema } from '../../schemas/userSchemas';
import { api } from '../../services/api';
import { RegiterUserData } from '../../types/types';

export default function UserRegisterForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<RegiterUserData>({
    resolver: yupResolver(registerUserSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
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
    mutate(data);
  }

  return (
    <Container component="form" maxWidth="sm" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <DefaultTextField
            name="firstname"
            type="text"
            label="Primeiro Name"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <DefaultTextField
            name="lastname"
            type="text"
            label="Último Name"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12}>
          <DefaultTextField
            name="email"
            type="email"
            label="E-mail"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12}>
          <DefaultTextField
            name="password"
            type="password"
            label="Senha"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12}>
          <DefaultTextField
            name="confirmPassword"
            type="password"
            label="Confirmar Senha"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" size="large" type="submit" fullWidth>
            Confirmar Dados
          </Button>
        </Grid>

        {/* <Grid item xs={12}>
        <LoadingButton loading variant="contained" size="large">
          Confirmar Dados
        </LoadingButton>
      </Grid> */}
      </Grid>
    </Container>
  );
}
