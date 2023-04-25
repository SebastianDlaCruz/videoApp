import { createGlobalStyle } from "styled-components";
import img from "/assets/portada.jpg";
export const GlobalStyled = createGlobalStyle`
    *,::after,::before{
      box-sizing: inherit;
    }

    body{
      min-block-size: 100vh;
      background-color: #161616;
      background-image: url(${img});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      color: #fff;
    }

    a{
      text-decoration: none;  
    }
`;