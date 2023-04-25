import { Card } from "@styled/tools/Card.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImagesProps } from "../../types/types";
export const CardStyled = styled(Link) <ImagesProps>`
    ${Card};

    transform: scale(100%);
    transition: transform 1s ease-in-out; 
    &:hover{
      transform: scale(104%);
    }
    a{
      color: white;
    }
`;