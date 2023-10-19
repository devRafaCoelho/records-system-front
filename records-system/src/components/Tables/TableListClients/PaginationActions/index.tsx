import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import usePaginationClient from '../../../../hooks/usePaginationClient';

interface TablePaginationActionsProps {
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: any) => void;
}

export default function PaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { onPageChange } = props;
  const { data, page } = usePaginationClient();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (params: string) => {
    if (location.search === '') {
      navigate(`/client${params}`);
    } else {
      const searchParams = new URLSearchParams(location.search);
      const newSearchParams = new URLSearchParams(params);

      for (const [key, value] of newSearchParams.entries()) {
        value !== null && value !== '' ? searchParams.set(key, value) : searchParams.delete(key);
      }

      navigate(`/client?${searchParams.toString()}`);
    }
  };

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, handleNavigate('?page=1'));
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, handleNavigate(`?page=${page - 1}`));
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, handleNavigate(`?page=${page + 1}`));
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, handleNavigate(`?page=${data?.totalPages}`));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 1}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>

      <IconButton onClick={handleBackButtonClick} disabled={page === 1} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>

      <IconButton
        onClick={handleNextButtonClick}
        disabled={page === data?.totalPages}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>

      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page === data?.totalPages}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
