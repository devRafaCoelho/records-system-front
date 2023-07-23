import { Container, TextField, css, styled } from '@mui/material';

export const FormContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 4vh;
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
