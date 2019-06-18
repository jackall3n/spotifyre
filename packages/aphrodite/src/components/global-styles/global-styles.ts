import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';
import {theme} from "../theme";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    font-family: proxima-nova, sans-serif;
    font-style: normal;
    color: ${theme.text.color};
    background: black;
  }
  
   html, body, #app-container {
  }
  
    ::-webkit-scrollbar {
      width: 10px;
    }
    
    ::-webkit-scrollbar-track {
      background: none; 
    }
    
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 100px;
    }
`;
