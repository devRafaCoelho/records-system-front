import { Container, Grid, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import Header from '../../components/Header';
import { api } from '../../services/api';
import { getTheme } from '../../theme/theme';
import { Item } from './styles';
import BasicTableRecord from '../../components/Tables/BasicTableRecord';
import BasicTableClient from '../../components/Tables/BasicTableClient';

export default function Home() {
  const { data } = useQuery('home', api.getHomeData);
  const theme = getTheme();

  if (!data) {
    return null;
  }

  return (
    <>
      <Header />

      <Container sx={{ marginTop: '30px', marginBottom: '30px' }}>
        <Grid container spacing={3} mb={4}>
          <Grid item md={4} sm={6} xs={12}>
            <Item type="success">
              <Typography variant="h5" mb={2}>
                Payed Records
              </Typography>
              <Typography variant="h5">{data?.totalValuePayed}</Typography>
            </Item>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Item type="error">
              <Typography variant="h5" mb={2}>
                Expired Records
              </Typography>
              <Typography variant="h5">{data?.totalValueExpired}</Typography>
            </Item>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Item type="warning">
              <Typography variant="h5" mb={2}>
                Pending Records
              </Typography>
              <Typography variant="h5">{data?.totalValuePending}</Typography>
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={4}>
          <Grid item md={4} sm={6} xs={12}>
            <BasicTableRecord
              tableData={data?.payedRecords}
              text="Payed Records"
              color={theme.palette.success.main}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <BasicTableRecord
              tableData={data?.expiredRecords}
              text="Expired Records"
              color={theme.palette.error.main}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <BasicTableRecord
              tableData={data?.pendingRecords}
              text="Pending Records"
              color={theme.palette.warning.main}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <BasicTableClient text="Defaulter Clients" tableData={data?.defaulterClients} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <BasicTableClient text="Up-to-date Clients" tableData={data?.upToDateClients} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
