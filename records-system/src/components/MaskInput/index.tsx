import InputMask from 'react-input-mask';
import { CustomTextField } from '../../styles/styles';

function CustomInputMaskComponent({ ...props }) {
  return <InputMask mask="+55 (99) 99999-9999" maskChar={null} {...props} />;
}

export default function MaskInput() {
  return (
    <CustomTextField
      label="Phone Number"
      variant="outlined"
      fullWidth
      InputProps={{
        inputComponent: CustomInputMaskComponent
      }}
    />
  );
}
