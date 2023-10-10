import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { api } from '../services/api';

export default function usePaginationClient({
  page = 1,
  perPage = 5,
  order = 'asc',
  status = '',
  name = ''
} = {}) {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  page = Number(queryParams.get('page') || page);
  perPage = Number(queryParams.get('perPage') || perPage);
  order = queryParams.get('order') || order;
  status = queryParams.get('status') || status;
  name = queryParams.get('name') || name;

  const { data } = useQuery(['client-data', page, perPage, order, status, name], () =>
    api.listClients(page, perPage, order, status, name)
  );

  return { data, page, perPage, order };
}
