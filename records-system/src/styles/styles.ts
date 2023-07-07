import { css } from '@emotion/react'
import { Container, styled } from '@mui/material'

export const MainContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
`

export const FormContainer = styled(Container)`
  ${({ theme }) => css`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;

    input,
    button {
      width: 100%;
    }
  `}
`
