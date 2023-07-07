import { TextField, css, styled } from '@mui/material'

export const CustomTextField = styled(TextField)`
  ${({ theme }) => css`
    && {
      & .MuiOutlinedInput-root {
        color: ${theme.palette.grey[700]};
        &:not(.Mui-focused):hover .MuiOutlinedInput-notchedOutline {
          border-color: ${theme.palette.grey[800]};
        }
      }

      & .MuiInputLabel-root {
        color: ${theme.palette.grey[700]};
        &.Mui-focused {
          color: ${theme.palette.primary.main};
        }
      }

      & .MuiOutlinedInput-notchedOutline {
        border-color: ${theme.palette.grey[700]};
      }

      & .MuiIconButton-root {
        color: ${theme.palette.grey[700]};
      }
    }
  `}
`
