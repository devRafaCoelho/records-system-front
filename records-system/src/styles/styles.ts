import { Box, Container, TextField, Typography, css, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const FormContainer = styled(Container)`
  min-height: 100vh;
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
        color: ${theme.palette.grey[700]};
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
    }
  `}
`;

export const ContainerModal = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: rgb(18, 18, 18);
  box-shadow: 24px;
  padding: 20px;
`;
