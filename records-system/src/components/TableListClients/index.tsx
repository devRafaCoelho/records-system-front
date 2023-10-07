import { Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { api } from '../../services/api';

export function TableClients({ page, perPage }: any) {
  const { data } = useQuery(['client-data', page, perPage], () => api.listClients(page, perPage));

  return (
    <div>
      <Typography>TABLE</Typography>
      {data &&
        data.clients.map((client) => (
          <div key={client.id}>
            <p>Nome: {client.firstName}</p>
            <p>Email: {client.email}</p>
          </div>
        ))}
    </div>
  );
}
