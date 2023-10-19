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
import usePaginationRecord from '../../../hooks/usePaginationRecord';
import { getTheme } from '../../../theme/theme';
import DeleteRecordModal from '../../Modals/DeleteRecordModal';
import UpdateRecordModal from '../../Modals/UpdateRecordModal';
import PaginationActions from './PaginationActions';
import usePaginationClientRecords from '../../../hooks/usePaginationClientRecords';

export default function TableListClientRecords({ data }: any) {
  const theme = getTheme();
  const color = theme.palette.grey[400];
  const navigate = useNavigate();
  const location = useLocation();

  const [currentOrder, setCurrentOrder] = React.useState('asc');

  const handleNavigate = (params: string) => {
    if (location.search === '') {
      navigate(`/client/${data.id}${params}`);
    } else {
      const searchParams = new URLSearchParams(location.search);
      const newSearchParams = new URLSearchParams(params);

      for (const [key, value] of newSearchParams.entries()) {
        value !== null && value !== '' ? searchParams.set(key, value) : searchParams.delete(key);
      }

      navigate(`/client/${data.id}?${searchParams.toString()}`);
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
            RECORDS
          </Typography>

          {/* <FilterMenu /> */}
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
                    Record ID
                  </TableSortLabel>
                </TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Value</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data?.Records.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ color }}>{row.id}</TableCell>
                  <TableCell sx={{ color }}>{row.due_date}</TableCell>
                  <TableCell sx={{ color }}>{row.value}</TableCell>
                  <TableCell sx={{ color }}>
                    <Chip
                      variant="outlined"
                      label={row.status}
                      color={
                        row.status === 'payed'
                          ? 'success'
                          : row.status === 'expired'
                          ? 'error'
                          : 'warning'
                      }
                    />
                  </TableCell>
                  <TableCell sx={{ color }}>{row.description}</TableCell>
                  <TableCell align="center" sx={{ color }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                      }}
                    >
                      <DeleteRecordModal />
                      <UpdateRecordModal />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

            {/* <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, { label: 'All', value: data?.totalRecords || 0 }]}
                  colSpan={6}
                  count={data?.totalRecords || 0}
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
            </TableFooter> */}
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
