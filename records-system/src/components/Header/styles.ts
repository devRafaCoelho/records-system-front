import { Avatar, Box, InputBase, alpha, css, styled } from '@mui/material';

export const Search = styled('div')(
  ({ theme }) => css`
    position: relative;
    border-radius: ${theme.shape.borderRadius};
    background-color: ${alpha(theme.palette.common.white, 0.15)};

    &:hover {
      background-color: ${alpha(theme.palette.common.white, 0.25)};
    }

    margin-right: ${theme.spacing(2)};
    margin-left: ${theme.spacing(2)};
    width: 100%;

    ${theme.breakpoints.up('sm')} {
      margin-left: ${theme.spacing(3)};
      width: auto;
    }
  `
);

export const SearchIconWrapper = styled('div')`
  ${({ theme }) => css`
    padding: ${theme.spacing(0, 2)};
    height: 100%;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const StyledInputBase = styled(InputBase)`
  ${({ theme }) => css`
    color: inherit;

    & .MuiInputBase-input {
      padding: ${theme.spacing(1, 1, 1, 0)};
      padding-left: calc(1em + ${theme.spacing(4)});
      transition: ${theme.transitions.create('width')};
      width: 100%;

      [${theme.breakpoints.up('md')}]: {
        width: 20ch;
      }
    }
  `}
`;

export const CustomAvatar = styled(Avatar)`
  ${({ theme }) => css`
    background-color: ${theme.palette.common.black};
  `}
`;

type CustomBoxProps = {
  status: boolean;
  theme?: any;
};

export const CustomBox = styled(Box)<CustomBoxProps>`
  ${({ theme, status }: any) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid ${status ? theme.palette.common.white : theme.palette.primary.main};
  `}
`;

// interface ColorIconProps extends SvgIconProps {
//   status: boolean;
// }

// export const ColorIcon = styled('svg')<ColorIconProps>`
//   ${({ theme, status }: any) => css`
//     border: 2px solid ${status ? theme.palette.common.white : theme.palette.primary.main};
//   `}
// `;
