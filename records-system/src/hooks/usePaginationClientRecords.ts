import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { api } from '../services/api';

export default function usePaginationClientRecords(id: number, order = 'asc') {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  order = queryParams.get('order') || order;

  const { data } = useQuery(['get-client', id, order], () => api.getClient(id, order));

  return { data, order };
}
