// import { Box } from '@mui/material';
// import InputAdornment from '@mui/material/InputAdornment';
// import { useState } from 'react';
// import { CustomTextField } from '../DefaultTextField/styles';

// interface Props {
//   name: string;
//   label: string;
//   register: any;
//   errors?: any;
// }

// export default function PhoneInput({ name, label, register, errors }: Props) {
//   const [isFocused, setIsFocused] = useState(false);

//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//   };

//   return (
//     <Box>
//       <CustomTextField
//         id={name}
//         label={label}
//         variant="outlined"
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         fullWidth
//         {...register(name)}
//         error={!!errors?.[name]}
//         helperText={errors?.[name] ? errors[name].message : null}
//         InputProps={{
//           startAdornment: isFocused && <InputAdornment position="start">+55</InputAdornment>
//         }}
//       />
//     </Box>
//   );
// }

import { Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import { CustomTextField } from '../DefaultTextField/styles';

interface Props {
  name: string;
  label: string;
  register: any;
  errors?: any;
}

export default function PhoneInput({ name, label, register, errors }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Box>
      <CustomTextField
        id={name}
        label={label}
        variant="outlined"
        fullWidth
        {...register(name)}
        error={!!errors?.[name]}
        helperText={errors?.[name] ? errors[name].message : null}
        InputProps={{
          startAdornment: isFocused && <InputAdornment position="start">+55</InputAdornment>,
          onBlur: handleBlur
        }}
        inputProps={{
          onFocus: handleFocus
        }}
      />
    </Box>
  );
}
