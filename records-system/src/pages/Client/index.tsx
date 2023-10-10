import { Container, Typography } from '@mui/material';
import Header from '../../components/Header';

export default function Client() {
  return (
    <>
      <Header />

      <Container>
        <Typography variant="h3" mb={4}>
          CLIENT DATA
        </Typography>
      </Container>
    </>
  );
}
