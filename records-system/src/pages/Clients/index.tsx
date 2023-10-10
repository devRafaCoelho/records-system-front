import { Container } from '@mui/material';
import Header from '../../components/Header';
import CustomPaginationActionsTable2 from '../../components/Tables/TableListClients';

export default function Clients() {
  return (
    <>
      <Header />

      <Container
        sx={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CustomPaginationActionsTable2 />
      </Container>
    </>
  );
}
