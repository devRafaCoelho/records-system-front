import { Global, css } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

export const GlobalStyles = () => {
  const theme = useTheme();

  const Css = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      color: ${theme.palette.common.white};
      background-color: ${theme.palette.common.black};
    }

    input {
      -webkit-box-shadow: none !important;
      -moz-box-shadow: none !important;
      box-shadow: none !important;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-background-clip: text;
      -webkit-text-fill-color: ${theme.palette.common.white};
    }
  `;

  return <Global styles={Css} />;
};
