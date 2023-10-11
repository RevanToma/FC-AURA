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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,Poppins,
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
 font-family: "Roboto" !important ;
}

.homeDiv{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.backgroundInfo {
 display: flex;
 justify-content: center;

 .content {
  max-height: 0;
  overflow: hidden;
  transition: all 0.8s ease;
}
.content.open {
  max-height: 30rem;
}
 
  text-align: center;
  padding: 2rem;

  width:100%;

  div{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 40rem;
    align-items: center;

    button{
      font-size: 1.5rem;
      padding: 1rem;
    }
  
  }

 p {
  color: #d4d4d4;

  ${theme.backgroundInfo}
 }
 header{
  ${theme.h1}
  color: #9b9b9b;
 }
}

.readMore{
  color: #9b9b9b;
  font-weight: bold;
  

}

`;
