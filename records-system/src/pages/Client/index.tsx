import PersonIcon from '@mui/icons-material/Person';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import UpdateClientModal from '../../components/Modals/UpdateClientModal';
import TableListClientRecords from '../../components/Tables/TableListClientRecords';
import useAppContext from '../../hooks/useAppContext';
import usePaginationClientRecords from '../../hooks/usePaginationClientRecords';

export default function Client() {
  const { id } = useParams();
  const { data } = usePaginationClientRecords(Number(id), 'asc');
  const { setClientData } = useAppContext();

  useEffect(() => {
    setClientData(data);
  }, [data]);

  return (
    <>
      <Header />

      <Container>
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: (theme) => theme.spacing(2) }}
          mb={4}
        >
          <PersonIcon fontSize="large" />
          <Typography variant="h4">{`${data?.firstName} ${data?.lastName}`}</Typography>
        </Box>

        <Paper
          sx={{ marginBottom: (theme) => theme.spacing(4), padding: (theme) => theme.spacing(2) }}
        >
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h5">Client Data</Typography>
            </Grid>

            <Grid item xs={6} textAlign="end">
              <UpdateClientModal />
            </Grid>

            <Grid item sm={4} xs={6}>
              <Typography variant="h6">E-mail</Typography>
              <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                {data?.email}
              </Typography>
            </Grid>

            <Grid item sm={4} xs={6}>
              <Typography variant="h6">Phone</Typography>
              <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                {data?.phone}
              </Typography>
            </Grid>

            <Grid item sm={4} xs={6}>
              <Typography variant="h6">CPF</Typography>
              <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                {data?.cpf}
              </Typography>
            </Grid>

            {data?.zip_code && (
              <Grid item sm={4} xs={6}>
                <Typography variant="h6">Zip Code</Typography>
                <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                  {data?.zip_code}
                </Typography>
              </Grid>
            )}

            {data?.address && (
              <Grid item sm={4} xs={6}>
                <Typography variant="h6">Address</Typography>
                <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                  {data?.address}
                </Typography>
              </Grid>
            )}

            {data?.complement && (
              <Grid item sm={4} xs={6}>
                <Typography variant="h6">Complement</Typography>
                <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                  {data?.complement}
                </Typography>
              </Grid>
            )}

            {data?.district && (
              <Grid item xs={4}>
                <Typography variant="h6">District</Typography>
                <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                  {data?.district}
                </Typography>
              </Grid>
            )}

            {data?.city && (
              <Grid item xs={4}>
                <Typography variant="h6">City</Typography>
                <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                  {data?.city}
                </Typography>
              </Grid>
            )}

            {data?.uf && (
              <Grid item xs={4}>
                <Typography variant="h6">UF</Typography>
                <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                  {data?.uf}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Paper>

        <Paper sx={{ padding: (theme) => theme.spacing(2) }}>
          <TableListClientRecords data={data} />
        </Paper>
      </Container>
    </>
  );
}
