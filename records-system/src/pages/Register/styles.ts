import { Typography, css } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

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
