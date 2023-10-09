import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledLink } from '../../../styles/styles';
import { getTheme } from '../../../theme/theme';

export default function BasicTableClient({ tableData, text }: any) {
  const theme = getTheme();

  const color = theme.palette.grey[400];

  const dataToShow = tableData.clients.slice(0, 4);

  while (dataToShow.length < 4) {
    dataToShow.push({ firstName: '-', lastName: '-', id: '-', cpf: '-' });
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableCell colSpan={2} align="center">
            <Typography variant="h6">{text}</Typography>
          </TableCell>

          <TableCell align="center">
            <Chip
              variant="outlined"
              label={tableData.total}
              color={text === 'Clientes Inadimplentes' ? 'error' : 'success'}
            />
          </TableCell>
        </TableHead>

        <TableHead>
          <TableRow>
            <TableCell>Ciente</TableCell>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">CPF</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {dataToShow.map((row: any, index: number) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" sx={{ color }}>
                {`${row.firstName} ${row.lastName}` === '- -'
                  ? '-'
                  : `${row.firstName} ${row.lastName}`}
              </TableCell>
              <TableCell align="left" sx={{ color }}>
                {row.id}
              </TableCell>
              <TableCell align="left" sx={{ color }}>
                {row.cpf}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableCell colSpan={3} align="center">
            <StyledLink to="/clients">
              <Typography>Ver todos</Typography>
            </StyledLink>
          </TableCell>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
