import FilterListIcon from '@mui/icons-material/FilterList';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Chip, TableHead, Toolbar, Tooltip, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import usePaginationClient from '../../../hooks/usePaginationClient';
import { StyledLink } from '../../../styles/styles';
import { getTheme } from '../../../theme/theme';
import CustomizedDialogs from '../../Modals/AddRecordModal';

interface TablePaginationActionsProps {
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: any) => void;
}

function handleNavigateBase(params: string, navigate: any, location: any) {
  if (location.search === '') {
    navigate(`/client${params}`);
  } else {
    const searchParams = new URLSearchParams(location.search);
    const newSearchParams = new URLSearchParams(params);

    for (const [key, value] of newSearchParams.entries()) {
      searchParams.set(key, value);
    }

    navigate(`/client?${searchParams.toString()}`);
  }
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { onPageChange } = props;
  const { data, page } = usePaginationClient();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (params: string) => {
    handleNavigateBase(params, navigate, location);
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
        disabled={page >= (data?.totalPages ?? 1)}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>

      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= (data?.totalPages ?? 1)}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function CustomPaginationActionsTable() {
  const theme = getTheme();
  const color = theme.palette.grey[400];
  const navigate = useNavigate();
  const location = useLocation();

  const { data, page, perPage, order } = usePaginationClient();
  const [currentOrder, setCurrentOrder] = React.useState(order);

  const handleNavigate = (params: string) => {
    handleNavigateBase(params, navigate, location);
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

  React.useEffect(() => {}, [data]);

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
          <Typography sx={{ flex: '1 1 100%' }} variant="h4" id="tableTitle" component="div">
            CLIENTS
          </Typography>
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
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
                  onPageChange={() => TablePaginationActions}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

// import FilterListIcon from '@mui/icons-material/FilterList';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
// import { Chip, TableHead, Toolbar, Tooltip, Typography } from '@mui/material';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import { useTheme } from '@mui/material/styles';
// import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
// import usePaginationClient2 from '../../../hooks/usePaginationClient';
// import { StyledLink } from '../../../styles/styles';
// import { getTheme } from '../../../theme/theme';
// import CustomizedDialogs from '../../Modals/AddRecordModal';
// import { useLocation } from 'react-router-dom';
// import usePaginationClient from '../../../hooks/usePaginationClient';

// interface TablePaginationActionsProps {
//   onPageChange: (event: React.MouseEvent<HTMLButtonElement>, handleNavigate: any) => void;
// }

// function TablePaginationActions(props: TablePaginationActionsProps) {
//   const theme = useTheme();
//   const { onPageChange } = props;
//   const { data, page } = usePaginationClient2();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleNavigate = (params: string) => {
//     if (location.search === '') {
//       navigate(`/client${params}`);
//     } else {
//       const searchParams = new URLSearchParams(location.search);
//       const newSearchParams = new URLSearchParams(params);

//       for (const [key, value] of newSearchParams.entries()) {
//         searchParams.set(key, value);
//       }

//       navigate(`/client?${searchParams.toString()}`);
//     }
//   };

//   const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     onPageChange(event, handleNavigate('?page=1'));
//   };

//   const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     onPageChange(event, handleNavigate(`?page=${page - 1}`));
//   };

//   const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     onPageChange(event, handleNavigate(`?page=${page + 1}`));
//   };

//   const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     onPageChange(event, handleNavigate(`?page=${data?.totalPages}`));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 1}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>

//       <IconButton onClick={handleBackButtonClick} disabled={page === 1} aria-label="previous page">
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>

//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= (data?.totalPages ?? 1)}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>

//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= (data?.totalPages ?? 1)}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

// export default function CustomPaginationActionsTable() {
//   const theme = getTheme();
//   const color = theme.palette.grey[400];
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { data, page, perPage, order } = usePaginationClient();
//   const [currentOrder, setCurrentOrder] = React.useState(order);

//   const handleNavigate = (params: string) => {
//     if (location.search === '') {
//       navigate(`/client${params}`);
//     } else {
//       const searchParams = new URLSearchParams(location.search);
//       const newSearchParams = new URLSearchParams(params);

//       for (const [key, value] of newSearchParams.entries()) {
//         searchParams.set(key, value);
//       }

//       console.log(searchParams);
//       console.log(searchParams.toString());

//       navigate(`/client?${searchParams.toString()}`);
//     }
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const newPerPage = parseInt(event.target.value, 10);
//     handleNavigate(`?perPage=${newPerPage}`);
//   };

//   const handleSortLabelClick = () => {
//     setCurrentOrder((prevOrder: any) => {
//       const newOrder = prevOrder === 'asc' ? 'desc' : 'asc';
//       handleNavigate(`?order=${newOrder}`);
//       return newOrder;
//     });
//   };

//   React.useEffect(() => {}, [data]);

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <Toolbar
//           sx={{
//             pl: { sm: 2 },
//             pr: { xs: 1, sm: 1 },
//             mb: 2
//           }}
//         >
//           <Typography sx={{ flex: '1 1 100%' }} variant="h4" id="tableTitle" component="div">
//             CLIENTS
//           </Typography>
//           <Tooltip title="Filter list">
//             <IconButton>
//               <FilterListIcon />
//             </IconButton>
//           </Tooltip>
//         </Toolbar>

//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>
//                   <TableSortLabel
//                     active={true}
//                     onClick={handleSortLabelClick}
//                     direction={currentOrder === 'asc' ? 'asc' : 'desc'}
//                   >
//                     Name
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell>CPF</TableCell>
//                 <TableCell>E-mail</TableCell>
//                 <TableCell>Phone</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell align="center">Add Record</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {data?.clients.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell sx={{ color }}>
//                     <StyledLink to={`/client/${row.id}`} sx={{ color }}>
//                       {row.firstName + ' ' + row.lastName}
//                     </StyledLink>
//                   </TableCell>
//                   <TableCell sx={{ color }}>{row.cpf}</TableCell>
//                   <TableCell sx={{ color }}>{row.email}</TableCell>
//                   <TableCell sx={{ color }}>{row.phone}</TableCell>
//                   <TableCell sx={{ color }}>
//                     <Chip
//                       variant="outlined"
//                       label={row.status}
//                       color={row.status === 'up-to-date' ? 'success' : 'error'}
//                     />
//                   </TableCell>
//                   <TableCell align="center" sx={{ color }}>
//                     <CustomizedDialogs />
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>

//             <TableFooter>
//               <TableRow>
//                 <TablePagination
//                   rowsPerPageOptions={[5, 10, { label: 'All', value: data?.totalClients || 0 }]}
//                   colSpan={6}
//                   count={data?.totalClients || 0}
//                   rowsPerPage={perPage}
//                   page={page - 1}
//                   SelectProps={{
//                     inputProps: {
//                       'aria-label': 'rows per page'
//                     },
//                     native: true
//                   }}
//                   onPageChange={() => TablePaginationActions}
//                   onRowsPerPageChange={handleChangeRowsPerPage}
//                   ActionsComponent={TablePaginationActions}
//                 />
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </TableContainer>
//       </Paper>
//     </Box>
//   );
// }
