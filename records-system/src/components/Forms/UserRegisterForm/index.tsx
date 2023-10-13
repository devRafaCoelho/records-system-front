import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Grid } from '@mui/material';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../../hooks/useToast.ts';
import { UserSchema } from '../../../schemas/UserSchema.ts';
import { api } from '../../../services/api.ts';
import { LoadButton } from '../../../styles/styles.ts';
import { RegiterUserData } from '../../../types/types.ts';
import CPFInput from '../../Inputs/CPFInput.tsx/index.tsx';
import Input from '../../Inputs/Input/index.tsx';
import PhoneInput from '../../Inputs/PhoneInput/index.tsx';

export default function UserRegisterForm() {
  const navigate = useNavigate();
  const { toastfy } = useToast();
  const [loading, setLoading] = useState(false);

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
      toastfy({
        type: 'success',
        message: 'Data registered successfully!'
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

  async function onSubmit(data: RegiterUserData) {
    data.cpf = data.cpf?.replace(/\D/g, '');
    data.phone = data.phone?.replace(/[^+\d]/g, '');
    setLoading(true);
    mutate(data);
  }

  return (
    <Container component="form" maxWidth="sm" onSubmit={handleSubmit(onSubmit)} disableGutters>
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <Input
            name="firstName"
            type="text"
            label="First Name*"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <Input
            name="lastName"
            type="text"
            label="Last Name*"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12}>
          <Input name="email" type="email" label="E-mail*" register={register} errors={errors} />
        </Grid>

        <Grid item xs={12}>
          <CPFInput name="cpf" label="CPF" register={register} errors={errors} initialValue="" />
        </Grid>

        <Grid item xs={12}>
          <PhoneInput
            name="phone"
            label="Phone"
            register={register}
            errors={errors}
            initialValue=""
          />
        </Grid>

        <Grid item xs={12}>
          <Input
            name="password"
            type="password"
            label="Password*"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12}>
          <Input
            name="confirmPassword"
            type="password"
            label="Confirm Password*"
            register={register}
            errors={errors}
          />
        </Grid>

        <Grid item xs={12}>
          <LoadButton size="large" loading={loading} variant="contained" type="submit" fullWidth>
            CONFIRM DATA
          </LoadButton>
        </Grid>
      </Grid>
    </Container>
  );
}
