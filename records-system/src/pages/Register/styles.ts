import { css } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
    text-decoration: none;
    transition: 0.2s all ease-in-out;

    &:hover {
      transition: 0.4s all ease-in-out;
      color: ${theme.palette.primary.dark};
    }
  `}
`;
