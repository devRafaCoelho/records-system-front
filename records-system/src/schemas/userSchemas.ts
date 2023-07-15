import * as yup from 'yup';

export const registerUserSchema = yup.object().shape({
  firstName: yup.string().required('Este campo deve ser preenchido'),
  lastName: yup.string().required('Este campo deve ser preenchido'),
  email: yup.string().required('Este campo deve ser preenchido'),
  cpf: yup.string(),
  phone: yup.string(),
  password: yup.string().required('Este campo deve ser preenchido'),
  confirmPassword: yup.string().required('Este campo deve ser preenchido')
});
