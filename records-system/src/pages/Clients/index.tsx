import { Container, Button, Box } from '@mui/material';
import Header from '../../components/Header';
import CustomPaginationActionsTable2 from '../../components/Tables/TableListClients';
import SearchInput from '../../components/SearchInput';

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
          <Button variant="contained">Add Client</Button>
          <SearchInput />
        </Box>

        <CustomPaginationActionsTable2 />
      </Container>
    </>
  );
}
