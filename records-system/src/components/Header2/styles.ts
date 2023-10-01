import { Avatar, css, styled } from '@mui/material';

export const CustomAvatar = styled(Avatar)`
  ${({ theme }) => css`
    background-color: ${theme.palette.common.black};
  `}
`;
