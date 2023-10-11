import { TextField } from '@mui/material';
import { useState } from 'react';
import useAppContext from '../../../hooks/useAppContext';

type Props = {
  name: string;
  label: string;
  register: any;
  errors?: any;
  initialValue?: any;
};

export default function UFInput({ name, label, register, errors, initialValue }: Props) {
  const { userData } = useAppContext();
  const [ufValue, setUFValue] = useState(initialValue || userData.uf);

  const handleChange = (event: any) => {
    const newValue = event.target.value
      .replace(/[^A-Za-z]/g, '')
      .slice(0, 2)
      .toUpperCase();
    setUFValue(newValue);
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
      value={ufValue}
      onChange={handleChange}
    />
  );
}
