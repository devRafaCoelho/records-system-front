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
import useAppContext from '../../hooks/useAppContext';
import { StyledLink } from '../../styles/styles';
import { getTheme } from '../../theme/theme';

export default function BasicTableRecord({ tableData, text }: any) {
  const { setValueTab } = useAppContext();
  const theme = getTheme();

  const color = theme.palette.grey[400];

  const dataToShow = tableData.records.slice(0, 4);

  while (dataToShow.length < 4) {
    dataToShow.push({ clientName: '-', recordId: '-', value: '-' });
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableCell colSpan={2} align="center">
            <Typography variant="h6">{text}</Typography>
          </TableCell>

          <TableCell>
            <Chip
              variant="outlined"
              label={tableData.total}
              color={
                text === 'Cobranças Pagas'
                  ? 'success'
                  : text === 'Cobranças Vencidas'
                  ? 'error'
                  : 'warning'
              }
            />
          </TableCell>
        </TableHead>

        <TableHead>
          <TableRow>
            <TableCell>Ciente</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Valor</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {dataToShow.map((row: any) => (
            <TableRow key={row.recordId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" sx={{ color }}>
                {row.clientName}
              </TableCell>
              <TableCell sx={{ color }}>{row.recordId}</TableCell>
              <TableCell sx={{ color }}>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableCell colSpan={3} align="center">
            <StyledLink to="/records" onClick={() => setValueTab(2)}>
              <Typography>Ver todos</Typography>
            </StyledLink>
          </TableCell>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
