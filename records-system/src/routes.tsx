import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { GlobalStyles } from './styles/GlobalStyles';
import { getTheme } from './theme/theme';
import { getItem } from './utils/storage';
import Clients from './pages/Clients';
import Records from './pages/Records';
import Account from './pages/Account';

type ProtectedRoutesProps = {
  redirectTo: string;
};

function ProtectedRoutes({ redirectTo }: ProtectedRoutesProps) {
  const isAuth = getItem('token');

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}

const queryClient = new QueryClient();

export default function MainRoutes() {
  const theme = getTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="*" element={<Navigate to="/userRegister" />} />
          <Route path="/userRegister" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes redirectTo="/login" />}>
            <Route path="/home" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/records" element={<Records />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
