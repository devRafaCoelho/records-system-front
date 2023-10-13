import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Grid } from '@mui/material';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../../hooks/useToast.ts';
import { UpdateUserSchema } from '../../../schemas/UserSchema.ts';
import { api } from '../../../services/api.ts';
import { LoadButton } from '../../../styles/styles.ts';
import { UpdateUserData } from '../../../types/types.ts';
import CPFInput from '../../Inputs/CPFInput.tsx/index.tsx';
import Input from '../../Inputs/Input/index.tsx';
import PhoneInput from '../../Inputs/PhoneInput/index.tsx';

export default function UserUpdateForm() {
  const navigate = useNavigate();
  const { toastfy } = useToast();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const { data } = useQuery('user-data', api.getUser);

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

  const { mutate } = useMutation(api.updateUser, {
    onSuccess: () => {
      navigate('/home');
      queryClient.invalidateQueries('user-data');
      toastfy({
        type: 'success',
        message: 'Data updated successfully!'
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
    if (data) {
      setValue('firstName', data.firstName);
      setValue('lastName', data.lastName);
      setValue('email', data.email);
      setValue('cpf', data.cpf ? data.cpf : '');
      setValue('phone', data.phone ? data.phone : '');
    }
  }, [data]);

  if (!data) {
    return null;
  }

  return (
    <Container component="form" maxWidth="sm" onSubmit={handleSubmit(onSubmit)}>
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
          <CPFInput
            name="cpf"
            label="CPF"
            register={register}
            errors={errors}
            initialValue={data.cpf}
          />
        </Grid>

        <Grid item xs={12}>
          <PhoneInput
            name="phone"
            label="Phone"
            register={register}
            errors={errors}
            initialValue={data.phone}
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
          <LoadButton size="large" loading={loading} variant="contained" type="submit" fullWidth>
            CONFIRM DATA
          </LoadButton>
        </Grid>
      </Grid>
    </Container>
  );
}
