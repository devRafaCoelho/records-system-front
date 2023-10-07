import { Paper, css, styled } from '@mui/material';

interface ItemProps {
  type: 'success' | 'error' | 'warning';
}

export const Item = styled(Paper)<ItemProps>`
  ${({ theme, type }) => css`
    padding: ${theme.spacing(1)};
    text-align: center;
    color: ${theme.palette[type].dark};
    border: 1px solid ${theme.palette[type].dark};
  `}
`;
