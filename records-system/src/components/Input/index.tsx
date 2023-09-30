import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import { CustomTextField } from '../../styles/styles';

type Props = {
  type: 'password' | 'text' | 'email';
  name: string;
  label: string;
  register: any;
  errors?: any;
};

export default function Input({ name, type, label, register, errors }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <CustomTextField
      id={name}
      label={label}
      variant="outlined"
      type={showPassword ? 'text' : type}
      fullWidth
      {...register(name)}
      error={!!errors[name]}
      helperText={errors[name] ? errors[name].message : null}
      InputProps={{
        endAdornment:
          type === 'password' ? (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : null
      }}
    />
  );
}
