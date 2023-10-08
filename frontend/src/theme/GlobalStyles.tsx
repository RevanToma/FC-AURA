import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  
}
  


 body {
  background-color: ${theme.color.primaryBackground} ;
  margin: 0;
  padding-bottom: 10rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
  Arial, sans-serif;
  font-size: 1.4rem;
  scroll-behavior: smooth;
  

  
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  border-radius: ${theme.radius.button};
  box-shadow: ${theme.primaryShadow};
  transition: ${theme.button.transition};
 padding: ${theme.button.padding};
}



`;
