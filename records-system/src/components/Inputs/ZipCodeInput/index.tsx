import { TextField } from '@mui/material';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import useAppContext from '../../../hooks/useAppContext';

type Props = {
  name: string;
  label: string;
  register: any;
  errors?: any;
  initialValue?: any;
};

function CustomInputMaskComponent({ ...props }) {
  return (
    <InputMask
      mask="999999-99"
      maskChar={null}
      value={props.value}
      onChange={props.onChange}
      {...props}
    />
  );
}

export default function ZipCodeInput({ name, label, register, errors, initialValue }: Props) {
  const { userData } = useAppContext();
  const [zipCodeValue, setZipCodeValue] = useState(initialValue || userData.zipCode);

  const handleChange = (event: any) => {
    setZipCodeValue(event.target.value);
  };

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
