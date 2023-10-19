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
      mask="+55 (99) 99999-9999"
      maskChar={null}
      value={props.value}
      onChange={props.onChange}
      {...props}
    />
  );
}

export default function PhoneInput({ name, label, register, errors, initialValue }: Props) {
  const [phoneValue, setPhoneValue] = useState(initialValue);

  const handleChange = (event: any) => {
    setPhoneValue(event.target.value);
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
        value: phoneValue,
        onChange: handleChange
      }}
    />
  );
}
