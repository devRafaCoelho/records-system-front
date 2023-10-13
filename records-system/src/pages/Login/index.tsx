import { Typography } from '@mui/material';
import LoginForm from '../../components/Forms/LoginForm';
import { MainContainer, StyledLink } from '../../styles/styles';
import useAppContext from '../../hooks/useAppContext';
import CustomizedSnackbars from '../../components/Alert';

export default function Login() {
  const { open, message } = useAppContext();

  return (
    <MainContainer>
      <Typography variant="h4" color="grey.200">
        Log in
      </Typography>
      <LoginForm />

      <Typography variant="h6">
        Don't have an account yet? <StyledLink to="/register">Register!</StyledLink>
      </Typography>

      {/* {open && <CustomizedSnackbars type="success" message="Data registered successfully!" />} */}
      {open && <CustomizedSnackbars type="error" message={message} />}
    </MainContainer>
  );
}
