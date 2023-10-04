import { LoadingButton } from '@mui/lab';
import { Container, Typography, TextField, css, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const MainContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 4vh;
`;

export const SecondContainer = styled(Container)`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 4vh;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledTypography = styled(Typography)`
  ${({ theme }) => css`
    transition: 0.4s all ease-in-out;

    &:hover {
      transition: 0.4s all ease-in-out;
      color: ${theme.palette.grey[200]};
    }
  `}
`;

export const LoadButton = styled(LoadingButton)`
  ${({ theme }) => css`
    &&& {
      &.Mui-disabled {
        background-color: ${theme.palette.primary.main};
      }

      &
        .MuiCircularProgress-root.MuiCircularProgress-indeterminate.MuiCircularProgress-colorInherit.css-62e83j-MuiCircularProgress-root {
        color: ${theme.palette.common.white};
      }
    }
  `}
`;

export const ContainerModal = styled(Container)`
  ${({ theme }) => css`
    padding: ${theme.spacing(2)} 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing(2)};

    border-radius: ${theme.shape.borderRadius}px;
    background-color: ${theme.palette.grey[800]};
  `}
`;

export const CustomTextField = styled(TextField)`
  ${({ theme, error }) => css`
    && {
      & .MuiInputLabel-root {
        color: ${theme.palette.grey[700]};

        &.Mui-focused {
          color: ${error ? theme.palette.error.main : theme.palette.primary.main};
        }
      }

      & .MuiOutlinedInput-root {
        color: ${theme.palette.common.white};
        border-color: ${theme.palette.grey[700]};

        &:not(.Mui-focused):hover .MuiOutlinedInput-notchedOutline {
          border-color: ${error ? theme.palette.error.main : theme.palette.grey[800]};
        }
      }

      & .MuiOutlinedInput-notchedOutline {
        border-color: ${error ? theme.palette.error.main : theme.palette.grey[700]};
      }

      & .MuiIconButton-root {
        color: ${theme.palette.grey[700]};
      }

      & .MuiTypography-root {
        color: ${theme.palette.grey[700]};
      }

      & input:-internal-autofill-selected {
        background-color: ${theme.palette.grey[700]};
      }
    }
  `}
`;
