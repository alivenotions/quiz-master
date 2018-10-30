import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poor+Story');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poor Story', cursive;
    background: #111;
    color: #fff;
  }
`

export default GlobalStyle
