import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/material/styles'

import { useState } from 'react'

interface Props {
  type: 'password' | 'text' | 'email'
  name: string
  label: string
  register: any
  errors?: any
}

export default function DefaultTextField({ name, type, label, register, errors }: Props) {
  const [showPassword, setShowPassword] = useState(false)
  const theme = useTheme()

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <TextField
      id={name}
      type={showPassword ? 'text' : type}
      label={label}
      variant="outlined"
      fullWidth
      {...register(name)}
      error={!!errors[name]}
      helperText={errors[name] ? errors[name].message : null}
      sx={{
        '& .MuiOutlinedInput-root': {
          color: theme.palette.grey[700],
          '&:not(.Mui-focused):hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[800]
          }
        },
        '& .MuiInputLabel-root': {
          color: theme.palette.grey[700],
          '&.Mui-focused': {
            color: theme.palette.primary.main
          }
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.grey[700]
        },
        '& .MuiIconButton-root': {
          color: theme.palette.grey[700]
        }
      }}
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
  )
}
