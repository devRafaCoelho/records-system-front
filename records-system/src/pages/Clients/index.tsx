import { Container, Typography } from '@mui/material';
import Header from '../../components/Header';
import CustomPaginationActionsTable from '../../components/TableListClients';

export default function Clients() {
  return (
    <>
      <Header />

      <Container>
        <Typography variant="h3" mb={4}>
          CLIENTS
        </Typography>
        <CustomPaginationActionsTable />
      </Container>
    </>
  );
}
