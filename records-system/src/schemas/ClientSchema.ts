import * as yup from 'yup';

export const ClientSchema = yup.object().shape({
  firstName: yup.string().required('This field must be filled in.'),
  lastName: yup.string().required('This field must be filled in.'),
  email: yup.string().required('This field must be filled in.'),
  cpf: yup.string().required('This field must be filled in.'),
  phone: yup.string().required('This field must be filled in.'),
  address: yup.string(),
  complement: yup.string(),
  zip_code: yup.string(),
  district: yup.string(),
  city: yup.string(),
  uf: yup.string()
});
