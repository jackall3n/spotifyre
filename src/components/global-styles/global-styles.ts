import {createGlobalStyle} from 'styled-components';
import {theme} from "../theme";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: proxima-nova, sans-serif;
    font-style: normal;
    color: ${theme.text.color};
    background: black;
    box-sizing: border-box;
  }
  
   html, body, #app-container {
  }
`;
