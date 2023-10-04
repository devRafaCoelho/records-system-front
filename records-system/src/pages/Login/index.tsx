import { Typography } from '@mui/material';
import LoginForm from '../../components/LoginForm';
import { MainContainer, StyledLink } from '../../styles/styles';

export default function Login() {
  return (
    <MainContainer>
      <Typography variant="h4" color="grey.200">
        Faça seu login
      </Typography>

      <LoginForm />

      <Typography variant="h6">
        Ainda não possui uma conta? <StyledLink to="/register">Cadastre-se!</StyledLink>
      </Typography>
    </MainContainer>
  );
}
