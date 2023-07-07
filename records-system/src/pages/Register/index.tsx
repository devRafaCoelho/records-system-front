import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import DefaultTextField from '../../components/DefaultTextField'
import { registerUserSchema } from '../../schemas/userSchemas'
import { api } from '../../services/api'
import { FormContainer, MainContainer } from '../../styles/styles'
import { UserData } from '../../types/types'
import { CustomTextField } from '../../components/DefaultTextField/styles'

export default function Register() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
    // setError
  } = useForm<UserData>({
    resolver: yupResolver(registerUserSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  async function onSubmit(userData: UserData) {
    try {
      await api.registerUser(userData)

      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <MainContainer>
      <FormContainer disableGutters maxWidth="xs" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <DefaultTextField
              name="firstName"
              type="text"
              label="First Name"
              register={register}
              errors={errors}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <DefaultTextField
              name="lastName"
              type="text"
              label="Last Name"
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
        </Grid>
      </FormContainer>
    </MainContainer>
  )
}
