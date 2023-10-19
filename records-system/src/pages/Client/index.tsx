import { Container, Grid, Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import UpdateClientModal from '../../components/Modals/UpdateClientModal';
import TableListClientRecords from '../../components/Tables/TableListClientRecords';
import usePaginationClientRecords from '../../hooks/usePaginationClientRecords';
import useAppContext from '../../hooks/useAppContext';
import { useEffect } from 'react';

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
        <Typography variant="h4" mb={4}>
          {`${data?.firstName} ${data?.lastName}`}
        </Typography>

        <Paper
          sx={{ marginBottom: (theme) => theme.spacing(4), padding: (theme) => theme.spacing(2) }}
        >
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h5">Client Data</Typography>
            </Grid>

            <Grid item xs={6} textAlign="end">
              <UpdateClientModal />
              {/* <Button variant="outlined">
                <EditIcon fontSize="small" style={{ marginRight: '0.5vw' }} />
                Edit Client
              </Button> */}
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

            {data?.zip_code !== null ? (
              <Grid item sm={4} xs={6}>
                <Typography variant="h6">Zip Code</Typography>
                <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                  {data?.zip_code}
                </Typography>
              </Grid>
            ) : null}

            {data?.address !== null ? (
              <Grid item sm={4} xs={6}>
                <Typography variant="h6">Address</Typography>
                <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                  {data?.address}
                </Typography>
              </Grid>
            ) : null}

            {data?.complement !== null ? (
              <Grid item sm={4} xs={6}>
                <Typography variant="h6">Complement</Typography>
                <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                  {data?.complement}
                </Typography>
              </Grid>
            ) : null}

            {data?.district !== null ? (
              <Grid item xs={4}>
                <Typography variant="h6">District</Typography>
                <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                  {data?.district}
                </Typography>
              </Grid>
            ) : null}

            {data?.city !== null ? (
              <Grid item xs={4}>
                <Typography variant="h6">City</Typography>
                <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                  {data?.city}
                </Typography>
              </Grid>
            ) : null}

            {data?.uf !== null ? (
              <Grid item xs={4}>
                <Typography variant="h6">UF</Typography>
                <Typography variant="subtitle1" color={(theme) => theme.palette.grey[400]}>
                  {data?.uf}
                </Typography>
              </Grid>
            ) : null}
          </Grid>
        </Paper>

        <Paper sx={{ padding: (theme) => theme.spacing(2) }}>
          <TableListClientRecords data={data} />
        </Paper>
      </Container>
    </>
  );
}
