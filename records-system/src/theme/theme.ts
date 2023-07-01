import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#A785ED',
      light: '#BCA4ED',
      dark: '#8250EB',
      contrastText: '#fff'
    },
    secondary: {
      main: '#E183C8'
    },
    grey: {
      500: 'rgba(255, 255, 255, 0.15)',
      600: '#454545',
      700: '#242424',
      800: 'rgba(0, 0, 0, 0.8);',
      900: 'rgba(0, 0, 0, 0.15);'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: '1.95rem'
    },
    h2: {
      fontFamily: 'Nunito',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: '1.95rem'
    },
    h3: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: '3.375rem'
    },
    h4: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: '1.875rem'
    },
    h5: {
      fontFamily: 'Nunito',
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: '1.125rem'
    },
    h6: {
      fontFamily: 'Nunito',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: '1.5rem'
    },
    subtitle1: {
      fontFamily: 'Nunito',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.125rem'
    },
    subtitle2: {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.5rem'
    },
    body1: {
      fontFamily: 'Nunito',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem'
    },
    body2: {
      fontFamily: 'Nunito',
      fontWeight: 400,
      fontSize: '1.25rem',
      lineHeight: '1.875rem'
    }
  }
})
