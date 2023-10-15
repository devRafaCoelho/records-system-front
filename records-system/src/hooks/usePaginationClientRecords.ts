import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { api } from '../services/api'; // Certifique-se de importar o módulo 'api' corretamente

export default function usePaginationClientRecords({ id, order = 'asc' }: any = {}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  order = queryParams.get('order') || order;

  const { data } = useQuery(['list-client-records', id, order], () =>
    api.getClient(Number(id), order)
  );

  const records = data?.Records;

  return { records, order };
}
