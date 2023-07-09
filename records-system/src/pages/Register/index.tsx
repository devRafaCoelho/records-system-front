import { Typography } from '@mui/material';
import UserRegisterForm from '../../components/UserRegisterForm';
import { FormContainer } from '../../styles/styles';
import { StyledLink, StyledTypography } from './styles';

export default function Register() {
  return (
    <FormContainer>
      <Typography variant="h4" color="grey.200">
        ADICIONE SEUS DADOS
      </Typography>

      <UserRegisterForm />

      <StyledLink to="/login">
        <StyledTypography variant="body1" color="grey.700">
          Já possui uma conta? Faça o Login!
        </StyledTypography>
      </StyledLink>
    </FormContainer>
  );
}
