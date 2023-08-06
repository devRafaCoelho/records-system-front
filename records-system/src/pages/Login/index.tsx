import { Typography } from '@mui/material';
import LoginForm from '../../components/LoginForm';
import { FormContainer, StyledLink, StyledTypography } from '../../styles/styles';

export default function Login() {
  return (
    <FormContainer>
      <Typography variant="h4" color="grey.200">
        LOGIN
      </Typography>

      <LoginForm />

      <StyledLink to="/userRegister">
        <StyledTypography variant="body1" color="grey.700">
          Ainda não possui uma conta? Cadastre-se!
        </StyledTypography>
      </StyledLink>
    </FormContainer>
  );
}
