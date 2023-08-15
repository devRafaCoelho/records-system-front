import { Typography } from '@mui/material';
import DeleteModal from '../../components/DeleteModal';
import Header from '../../components/Header';
import UserUpdateForm from '../../components/UserUpdateForm';
import { SecondContainer } from '../../styles/styles';

export default function Account() {
  return (
    <>
      <Header />
      <SecondContainer>
        <Typography variant="h4" color="grey.200">
          GERENCIE SEUS DADOS
        </Typography>

        <UserUpdateForm />

        <DeleteModal />
      </SecondContainer>
    </>
  );
}
