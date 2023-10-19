import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useQuery } from 'react-query';
import { api } from '../../../services/api';

type Props = {
  name: string;
  label: string;
  register: any;
  errors?: any;
  initialValue?: any;
  setValue: any;
};

function CustomInputMaskComponent({ ...props }) {
  return (
    <InputMask
      mask="99999-999"
      maskChar={null}
      value={props.value}
      onChange={props.onChange}
      {...props}
    />
  );
}

export default function ZipCodeInput({
  name,
  label,
  register,
  errors,
  initialValue,
  setValue
}: Props) {
  const [zipCodeValue, setZipCodeValue] = useState(initialValue);

  const handleChange = (event: any) => {
    setZipCodeValue(event.target.value);
  };

  const isValidCEP = zipCodeValue && zipCodeValue.length === 9;

  const { data, isError } = useQuery(['CEP-data', zipCodeValue], () => {
    if (isValidCEP) return api.getZipCode(zipCodeValue);
  });

  useEffect(() => {
    if (!isError && data) {
      setValue('address', data.logradouro);
      setValue('district', data.bairro);
      setValue('city', data.localidade);
      setValue('uf', data.uf);
    }
  }, [data]);

  return (
    <TextField
      id={name}
      label={label}
      variant="outlined"
      fullWidth
      {...register(name)}
      error={!!errors?.[name]}
      helperText={errors?.[name] ? errors[name].message : null}
      InputProps={{
        inputComponent: CustomInputMaskComponent,
        value: zipCodeValue,
        onChange: handleChange
      }}
    />
  );
}
