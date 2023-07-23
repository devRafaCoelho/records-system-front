import { CustomTextField } from '../../styles/styles';
import InputMask from 'react-input-mask';

type Props = {
  name: string;
  label: string;
  register: any;
  errors?: any;
};

function CustomInputMaskComponent({ ...props }) {
  return <InputMask mask="99999-999" maskChar={null} {...props} />;
}

export default function ZipCodeInput({ name, label, register, errors }: Props) {
  return (
    <CustomTextField
      id={name}
      label={label}
      variant="outlined"
      fullWidth
      {...register(name)}
      error={!!errors?.[name]}
      helperText={errors?.[name] ? errors[name].message : null}
      InputProps={{
        inputComponent: CustomInputMaskComponent
      }}
    />
  );
}
