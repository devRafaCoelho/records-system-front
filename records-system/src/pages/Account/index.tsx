import { Typography } from '@mui/material';
import UserUpdateForm from '../../components/UserUpdateForm';
import { SecondContainer } from '../../styles/styles';
import Header from '../../components/Header';

export default function Account() {
  return (
    <>
      <Header />
      <SecondContainer>
        <Typography variant="h4" color="grey.200">
          GERENCIE SEUS DADOS
        </Typography>

        <UserUpdateForm />
      </SecondContainer>
    </>
  );
}
