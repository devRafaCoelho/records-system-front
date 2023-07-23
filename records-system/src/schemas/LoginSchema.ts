import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().required('Este campo deve ser preenchido'),
  password: yup.string().required('Este campo deve ser preenchido')
});
