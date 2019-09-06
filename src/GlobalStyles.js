import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Notable');
    font-family: 'Notable', sans-serif;
  }
  `
  export default GlobalStyles;