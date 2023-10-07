import { useLocation, useNavigate } from 'react-router-dom';

export function usePagination() {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToRoute = (data: any, page = 1, perPage = 10) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('data', data);
    searchParams.set('page', page.toString());
    searchParams.set('perPage', perPage.toString());

    const newSearch = searchParams.toString();
    navigate(`/client?${newSearch}`);
  };

  return { navigateToRoute };
}
