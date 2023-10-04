import { Tabs, css, styled } from '@mui/material';

export const CustomTabs = styled(Tabs)`
  ${({ theme }) => css`
    && {
      & .MuiTabs-indicator {
        background-color: ${theme.palette.common.white};
      }
    }
  `}
`;
