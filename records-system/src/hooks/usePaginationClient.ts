import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { api } from '../services/api';

export default function usePaginationClient() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const numberPage = queryParams.get('page') || '0';
  const numberPerPage = queryParams.get('perPage') || '25';
  const order = queryParams.get('order') || 'asc';
  const status = queryParams.get('status') ?? '';
  const name = queryParams.get('name') ?? '';

  const { data } = useQuery(['client-data', numberPage, numberPerPage, order, status, name], () =>
    api.listClients(numberPage, numberPerPage, order, status, name)
  );

  return { data, numberPage, numberPerPage };
}
