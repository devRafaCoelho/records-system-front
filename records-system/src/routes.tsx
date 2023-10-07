import { ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { useToast } from './hooks/useToast';
import Account from './pages/Account';
import Clients from './pages/Clients';
import Home from './pages/Home';
import Login from './pages/Login';
import Records from './pages/Records';
import Register from './pages/Register';
import { GlobalStyles } from './styles/GlobalStyles';
import { getTheme } from './theme/theme';
import { logOut } from './utils/storage';
import { checkValidToken } from './utils/token';

type ProtectedRoutesProps = {
  redirectTo: string;
};

function ProtectedRoutes({ redirectTo }: ProtectedRoutesProps) {
  const isAuth = checkValidToken();

  return !isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}

const queryClient = new QueryClient();

export default function MainRoutes() {
  const { toastfy } = useToast();
  const navigate = useNavigate();
  const theme = getTheme();

  function tokenRoutine() {
    const isValid = checkValidToken();

    if (isValid) {
      logOut();
      navigate('/login');
      toastfy({
        type: 'warning',
        message: 'Sessão expirada!'
      });
    }
  }

  useEffect(() => {
    const intervalId = setInterval(tokenRoutine, 300000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
            <Route path="/client" element={<Clients />} />
            <Route path="/record" element={<Records />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
