import { createTheme } from '@mui/material';
import useWindowSize from '../hooks/useWindowSize';

function calculateFontSize() {
  const windowSize = useWindowSize();

  switch (true) {
    case windowSize.width < 600:
      return 12;
    case windowSize.width < 900:
      return 14;
    case windowSize.width < 1200:
      return 16;
    default:
      return;
  }
}

export function getTheme() {
  const fontSize = calculateFontSize();

  return createTheme({
    palette: {
      primary: {
        main: '#e00b5a',
        light: '#a80844',
        dark: '#6f062d'
      }
    },
    typography: {
      fontFamily: 'Nunito, sans-serif',
      fontSize
    }
  });
}
