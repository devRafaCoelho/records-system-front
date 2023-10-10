import { Typography } from '@mui/material';
import LoginForm from '../../components/Forms/LoginForm';
import { MainContainer, StyledLink } from '../../styles/styles';

export default function Login() {
  return (
    <MainContainer>
      <Typography variant="h4" color="grey.200">
        Log in
      </Typography>

      <LoginForm />

      <Typography variant="h6">
        Don't have an account yet? <StyledLink to="/register">Register!</StyledLink>
      </Typography>
    </MainContainer>
  );
}
