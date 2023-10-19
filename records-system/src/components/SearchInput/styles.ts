import { Paper, styled } from '@mui/material';
import { css } from '@mui/styled-engine';

type InputContainerProps = {
  expanded: boolean;
};

export const InputContainer = styled(Paper)<InputContainerProps>`
  ${({ theme, expanded }) => css`
    max-width: ${expanded ? '50px' : '320px'};
    width: 100%;
    height: 35px;
    padding: 8px;

    display: flex;
    align-items: center;
    position: relative;

    border-radius: 10px;
    transition: max-width 0.3s ease-in-out;
    background-color: ${theme.palette.common.white};
  `}
`;
