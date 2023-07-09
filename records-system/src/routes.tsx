import { ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './theme/theme'
import { getItem } from './utils/storage'

type ProtectedRoutesProps = {
  redirectTo: string
}

function ProtectedRoutes({ redirectTo }: ProtectedRoutesProps) {
  const isAuth = getItem('token')

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />
}

const queryClient = new QueryClient()

export default function MainRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="*" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes redirectTo="/login" />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
