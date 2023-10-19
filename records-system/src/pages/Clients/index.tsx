import { Box, Container } from '@mui/material';
import Header from '../../components/Header';
import AddClientModal from '../../components/Modals/AddClientModal';
import SearchInput from '../../components/SearchInput';
import CustomPaginationActionsTable from '../../components/Tables/TableListClients';

export default function Clients() {
  return (
    <>
      <Header />

      <Container
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{ marginBottom: '2vh', marginLeft: 'auto', display: 'flex', alignItems: 'center' }}
        >
          <AddClientModal />
          <SearchInput />
        </Box>

        <CustomPaginationActionsTable />
      </Container>
    </>
  );
}
