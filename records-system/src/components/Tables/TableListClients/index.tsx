import { Chip, TableHead, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import usePaginationClient from '../../../hooks/usePaginationClient';
import { StyledLink } from '../../../styles/styles';
import { getTheme } from '../../../theme/theme';
import CustomizedDialogs from '../../Modals/AddRecordModal';
import FilterMenu from './FilterMenu';
import PaginationActions from './PaginationActions';

export default function CustomPaginationActionsTable() {
  const theme = getTheme();
  const color = theme.palette.grey[400];
  const navigate = useNavigate();
  const location = useLocation();

  const { data, page, perPage, order } = usePaginationClient();
  const [currentOrder, setCurrentOrder] = React.useState(order);

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

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newPerPage = parseInt(event.target.value, 10);
    handleNavigate(`?perPage=${newPerPage}`);
  };

  const handleSortLabelClick = () => {
    setCurrentOrder((prevOrder: any) => {
      const newOrder = prevOrder === 'asc' ? 'desc' : 'asc';
      handleNavigate(`?order=${newOrder}`);
      return newOrder;
    });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            mb: 2
          }}
        >
          <Typography
            sx={{ cursor: 'pointer' }}
            variant="h4"
            id="tableTitle"
            component="div"
            onClick={() => navigate('/client')}
          >
            CLIENTS
          </Typography>

          <FilterMenu />
        </Toolbar>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={true}
                    onClick={handleSortLabelClick}
                    direction={currentOrder === 'asc' ? 'asc' : 'desc'}
                  >
                    Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>CPF</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Add Record</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data?.clients.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ color }}>
                    <StyledLink to={`/client/${row.id}`} sx={{ color }}>
                      {row.firstName + ' ' + row.lastName}
                    </StyledLink>
                  </TableCell>
                  <TableCell sx={{ color }}>{row.cpf}</TableCell>
                  <TableCell sx={{ color }}>{row.email}</TableCell>
                  <TableCell sx={{ color }}>{row.phone}</TableCell>
                  <TableCell sx={{ color }}>
                    <Chip
                      variant="outlined"
                      label={row.status}
                      color={row.status === 'up-to-date' ? 'success' : 'error'}
                    />
                  </TableCell>
                  <TableCell align="center" sx={{ color }}>
                    <CustomizedDialogs />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, { label: 'All', value: data?.totalClients || 0 }]}
                  colSpan={6}
                  count={data?.totalClients || 0}
                  rowsPerPage={perPage}
                  page={page - 1}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page'
                    },
                    native: true
                  }}
                  onPageChange={() => PaginationActions}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={PaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
