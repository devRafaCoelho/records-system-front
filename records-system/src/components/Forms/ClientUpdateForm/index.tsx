import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Grid } from '@mui/material';
import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '../../../hooks/useToast.ts';
import { ClientSchema } from '../../../schemas/ClientSchema.ts';
import { api } from '../../../services/api.ts';
import { LoadButton } from '../../../styles/styles.ts';
import { UpdatClientData } from '../../../types/types.ts';
import CPFInput from '../../Inputs/CPFInput.tsx/index.tsx';
import Input from '../../Inputs/Input/index.tsx';
import PhoneInput from '../../Inputs/PhoneInput/index.tsx';
import UFInput from '../../Inputs/UFInput/index.tsx';
import useAppContext from '../../../hooks/useAppContext.ts';
import ZipCodeInput from '../../Inputs/ZipCodeInput/index.tsx';

export default function ClientUpdateForm({ onClose }: any) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { toastfy } = useToast();
  const { clientData } = useAppContext();

  const queryClient = useQueryClient();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<UpdatClientData>({
    resolver: yupResolver(ClientSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      cpf: '',
      phone: '',
      address: '',
      complement: '',
      zip_code: '',
      district: '',
      city: '',
      uf: ''
    }
  });

  const { mutate } = useMutation((data: UpdatClientData) => api.updateClient(Number(id), data), {
    onSuccess: () => {
      onClose();
      navigate('/client');
      queryClient.invalidateQueries('client-data');
      queryClient.invalidateQueries('list-clients');
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

  async function onSubmit(data: UpdatClientData) {
    data.cpf = data.cpf?.replace(/\D/g, '');
    data.phone = data.phone?.replace(/[^+\d]/g, '');
    data.zip_code = data.zip_code?.replace(/-/g, '');
    setLoading(true);
    mutate(data);
    console.log(data);
  }

  useEffect(() => {
    if (clientData) {
      setValue('firstName', clientData.firstName);
      setValue('lastName', clientData.lastName);
      setValue('email', clientData.email);
      setValue('cpf', clientData.cpf);
      setValue('phone', clientData.phone);
      setValue('zip_code', clientData.zip_code ?? '');
      setValue('district', clientData.district ?? '');
      setValue('city', clientData.city ?? '');
      setValue('uf', clientData.uf ?? '');
      setValue('address', clientData.address ?? '');
      setValue('complement', clientData.complement ?? '');
    }
  }, [clientData]);

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
          <CPFInput
            name="cpf"
            label="CPF"
            register={register}
            errors={errors}
            initialValue={clientData.cpf}
          />
        </Grid>

        <Grid item xs={12}>
          <PhoneInput
            name="phone"
            label="Phone"
            register={register}
            errors={errors}
            initialValue={clientData.phone}
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <ZipCodeInput
            name="zip_code"
            label="CEP"
            register={register}
            setValue={setValue}
            errors={errors}
            initialValue={clientData.zip_code}
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <Input name="district" type="text" label="District" register={register} errors={errors} />
        </Grid>

        <Grid item sm={6} xs={12}>
          <Input name="city" type="text" label="City" register={register} errors={errors} />
        </Grid>

        <Grid item sm={6} xs={12}>
          <UFInput name="uf" label="UF" register={register} errors={errors} />
        </Grid>

        <Grid item xs={12}>
          <Input name="address" type="text" label="Address" register={register} errors={errors} />
        </Grid>

        <Grid item xs={12}>
          <Input
            name="complement"
            type="text"
            label="Complement"
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
