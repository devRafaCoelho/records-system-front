import { Typography } from '@mui/material';
import Header from '../../components/Header';
import { TableClients } from '../../components/TableListClients';

export default function Clients() {
  return (
    <>
      <Header />
      <Typography variant="h3">CLIENTS</Typography>
      <TableClients page="1" perPage="10" />
      {/* <Container>
        <EnhancedTable />
      </Container> */}
    </>
  );
}
