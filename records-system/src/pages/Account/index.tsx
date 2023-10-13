import { Typography } from '@mui/material';
import CenteredTabs from '../../components/AccountTabs';
import NewPasswordForm from '../../components/Forms/NewPasswordForm';
import UserUpdateForm from '../../components/Forms/UserUpdateForm';
import Header2 from '../../components/Header';
import DeleteModal from '../../components/Modals/DeleteModal';
import useAppContext from '../../hooks/useAppContext';
import { SecondContainer } from '../../styles/styles';

export default function Account() {
  const { valueAccountTab, open } = useAppContext();

  return (
    <>
      <Header2 />
      <SecondContainer>
        <Typography variant="h4" color="grey.200">
          MANAGE YOUR DATA
        </Typography>

        <CenteredTabs />

        {valueAccountTab === 0 ? <UserUpdateForm /> : <NewPasswordForm />}

        <DeleteModal />
      </SecondContainer>
    </>
  );
}
