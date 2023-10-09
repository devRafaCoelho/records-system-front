import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { api } from '../services/api';

export default function usePaginationClient({
  numberPage = '0',
  numberPerPage = '25',
  order = 'asc',
  status = '',
  name = ''
} = {}) {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  numberPage = queryParams.get('page') || numberPage;
  numberPerPage = queryParams.get('perPage') || numberPerPage;
  order = queryParams.get('order') || order;
  status = queryParams.get('status') || status;
  name = queryParams.get('name') || name;

  const { data } = useQuery(['client-data', numberPage, numberPerPage, order, status, name], () =>
    api.listClients(numberPage, numberPerPage, order, status, name)
  );

  return { data, numberPage, order };
}
