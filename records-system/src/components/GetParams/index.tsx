import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { api } from '../../services/api';

export default function GetParams() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const page = queryParams.get('page') || '1';
  const perPage = queryParams.get('perPage') || '25';
  const order = queryParams.get('order') || 'asc';
  const status = queryParams.get('status') ?? '';
  const name = queryParams.get('name') ?? '';

  const { data } = useQuery(['client-data', page, perPage, order, status, name], () =>
    api.listClients2(page, perPage, order, status, name)
  );

  return (
    <div>
      <Typography variant="h5">Clientes:</Typography>
      <List>
        {data?.clients.map((client) => (
          <ListItem key={client.id}>
            <ListItemText
              primary={client.firstName + ' ' + client.lastName}
              secondary={client.email}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
