import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *,::after,::before{
      box-sizing: inherit;
    }

    body{
      min-block-size: 100vh;
      background-color: #161616;
      color: #fff;
    }

    a{
      text-decoration: none;  
    }
`;