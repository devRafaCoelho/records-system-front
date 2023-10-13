import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { api } from '../services/api';

export default function usePaginationRecord({
  page = 1,
  perPage = 5,
  orderID = 'asc',
  orderName = 'asc',
  status = '',
  name = ''
} = {}) {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  page = Number(queryParams.get('page') || page);
  perPage = Number(queryParams.get('perPage') || perPage);
  orderID = queryParams.get('orderID') || orderID;
  orderName = queryParams.get('orderName') || orderName;
  status = queryParams.get('status') || status;
  name = queryParams.get('name') || name;

  const { data } = useQuery(['list-records', page, perPage, orderID, orderName, status, name], () =>
    api.listRecords(page, perPage, orderID, orderName, status, name)
  );

  return { data, page, perPage, orderID, orderName };
}
