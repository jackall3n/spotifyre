import {createGlobalStyle} from 'styled-components';
import {theme} from "../theme";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: proxima-nova, sans-serif;
    font-style: normal;
    color: ${theme.text.color};
    background: black;
  }
  
   html, body, #app-container {
  }
  
  * {
    box-sizing: border-box;
  }
  
  ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: none; 
}

/* Handle */
::-webkit-scrollbar-thumb {
      background: #888;
    border-radius: 100px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
      // background: #f1f1f100;
}
`;
