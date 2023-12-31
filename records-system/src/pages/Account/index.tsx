import { Typography } from '@mui/material';
import DeleteModal from '../../components/DeleteModal';
import Header2 from '../../components/Header';
import UserUpdateForm from '../../components/UserUpdateForm';
import { SecondContainer } from '../../styles/styles';
import CenteredTabs from '../../components/AccountTabs';
import useAppContext from '../../hooks/useAppContext';
import NewPasswordForm from '../../components/NewPasswordForm';

export default function Account() {
  const { valueAccountTab } = useAppContext();

  return (
    <>
      <Header2 />
      <SecondContainer>
        <Typography variant="h4" color="grey.200">
          GERENCIE SEUS DADOS
        </Typography>

        <CenteredTabs />

        {valueAccountTab === 0 ? <UserUpdateForm /> : <NewPasswordForm />}

        <DeleteModal />
      </SecondContainer>
    </>
  );
}
