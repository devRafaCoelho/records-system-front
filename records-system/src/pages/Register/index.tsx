import { Typography } from '@mui/material';
import UserRegisterForm from '../../components/Forms/UserRegisterForm';
import { MainContainer, StyledLink } from '../../styles/styles';

export default function Register() {
  return (
    <MainContainer>
      <Typography variant="h4">ADD YOUR DATA</Typography>

      <UserRegisterForm />

      <Typography variant="h6">
        Already have an account? <StyledLink to="/login">Login!</StyledLink>
      </Typography>
    </MainContainer>
  );
}
