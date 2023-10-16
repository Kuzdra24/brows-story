import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #FCFAF6;
    text-decoration: none;
    a{
      color: inherit; 
      text-decoration: none;
    }
  }
  *{
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    scroll-behavior: smooth;
  }
`;

export default GlobalStyles;
