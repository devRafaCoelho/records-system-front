import { Global } from '@emotion/react'
import { css } from '@mui/styled-engine'

const Css = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const GlobalStyles = () => <Global styles={Css} />
