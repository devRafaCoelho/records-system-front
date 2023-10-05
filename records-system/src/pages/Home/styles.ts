import { Paper, css, styled } from '@mui/material';

export const Item = styled(Paper)`
  ${({ theme }) => css`
    padding: ${theme.spacing(1)};
    text-align: center;
  `}
`;
