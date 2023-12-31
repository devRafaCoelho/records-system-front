import { Typography } from '@mui/material';
import UserRegisterForm from '../../components/UserRegisterForm';
import { MainContainer, StyledLink } from '../../styles/styles';

export default function Register() {
  return (
    <MainContainer>
      <Typography variant="h4">ADICIONE SEUS DADOS</Typography>

      <UserRegisterForm />

      <Typography variant="h6">
        Já possui uma conta? Faça seu <StyledLink to="/login">Login!</StyledLink>
      </Typography>
    </MainContainer>
  );
}
