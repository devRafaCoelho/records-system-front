import { Typography } from '@mui/material';
import DeleteModal from '../../components/DeleteModal';
import Header2 from '../../components/Header2';
import UserUpdateForm from '../../components/UserUpdateForm';
import { SecondContainer } from '../../styles/styles';
import CenteredTabs from '../../components/AccountTabs';

export default function Account() {
  return (
    <>
      <Header2 />
      <SecondContainer>
        <Typography variant="h4" color="grey.200">
          GERENCIE SEUS DADOS
        </Typography>

        <CenteredTabs />

        {/* <UserUpdateForm /> */}

        {/* <DeleteModal /> */}
      </SecondContainer>
    </>
  );
}
