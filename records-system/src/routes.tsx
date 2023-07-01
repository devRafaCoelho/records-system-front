import { ThemeProvider } from '@mui/material'
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

export default function MainRoutes() {
  return (
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
  )
}
