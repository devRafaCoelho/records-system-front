import { TextField } from '@mui/material';
import { useState } from 'react';
import InputMask from 'react-input-mask';

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
      mask="999.999.999-99"
      maskChar={null}
      value={props.value}
      onChange={props.onChange}
      {...props}
    />
  );
}

export default function CPFInput({ name, label, register, errors, initialValue }: Props) {
  const [cpfValue, setCpfValue] = useState(initialValue);

  const handleChange = (event: any) => {
    setCpfValue(event.target.value);
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
        value: cpfValue,
        onChange: handleChange
      }}
    />
  );
}
