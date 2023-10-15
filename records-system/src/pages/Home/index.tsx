import { Container, Grid, Typography } from '@mui/material';
import Header from '../../components/Header';
import BasicTableClient from '../../components/Tables/BasicTableClient';
import BasicTableRecord from '../../components/Tables/BasicTableRecord';
import usePaginationClient from '../../hooks/usePaginationClient';
import usePaginationRecord from '../../hooks/usePaginationRecord';
import { getTheme } from '../../theme/theme';
import { Item } from './styles';

export default function Home() {
  const theme = getTheme();

  const { data: payedData } = usePaginationRecord({ status: 'payed' });
  const { data: expiredData } = usePaginationRecord({ status: 'expired' });
  const { data: pendingData } = usePaginationRecord({ status: 'pending' });
  const { data: uptodateData } = usePaginationClient({ status: 'up-to-date' });
  const { data: defaulterData } = usePaginationClient({ status: 'defaulter' });

  if (!payedData || !expiredData || !pendingData || !uptodateData || !defaulterData) {
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
              <Typography variant="h5">{payedData?.totalValue}</Typography>
            </Item>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Item type="error">
              <Typography variant="h5" mb={2}>
                Expired Records
              </Typography>
              <Typography variant="h5">{expiredData?.totalValue}</Typography>
            </Item>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Item type="warning">
              <Typography variant="h5" mb={2}>
                Pending Records
              </Typography>
              <Typography variant="h5">{pendingData?.totalValue}</Typography>
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={4}>
          <Grid item md={4} sm={6} xs={12}>
            <BasicTableRecord
              tableData={payedData}
              text="Payed Records"
              color={theme.palette.success.main}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <BasicTableRecord
              tableData={expiredData}
              text="Expired Records"
              color={theme.palette.error.main}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <BasicTableRecord
              tableData={pendingData}
              text="Pending Records"
              color={theme.palette.warning.main}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <BasicTableClient text="Defaulter Clients" tableData={defaulterData} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <BasicTableClient text="Up-to-date Clients" tableData={uptodateData} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
