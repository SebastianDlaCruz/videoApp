import { Card } from "@styled/tools/Card.styled";
import { FlexBox } from "@styled/tools/Tools.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImagesProps } from "../../types/types";



export const ButtonStyled = styled.button<ImagesProps>`
  position: absolute;
  inset-block-end: 25%;
  inset-inline-start: 8%;
  padding: 1.5em;
  border: none;
  border-radius: 50%;
  background: url(${({ src }) => src}) no-repeat center  / 26%  #080808e6;
`;

export const ContainerCadsStyled = styled.div`
  ${FlexBox};
  flex-wrap: wrap;
  gap: 66px;
  padding: 32px 0;
`;


export const HeaderStyled = styled.header`
    padding: 1.3em 0;
    text-align: center;
    background-color: #000000c8;
`;

export const ContainerVideoStyled = styled.article`
    position: relative;
    ${FlexBox};
    flex-direction: column;
    block-size: 708px;
`;

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


export const VideoStyled = styled.article`

    ${Card};
    
    block-size: clamp(393px ,27%,552px);
    inline-size:clamp(235px ,55%,703px);
    padding: 0;
    video{
      block-size: 100%;
      inline-size: 100%;
      padding: 0;
      border-radius: 12px;
    }
`;


export const TimerStyled = styled.div`

  position: absolute;
  inset-block: 2%;
  inset-inline-end : 3%;
  max-block-size: 44px;
  ${FlexBox};
  gap: 12px;

  
  div{
    --size: 12px;
    block-size: var( --size);
    inline-size: var( --size);
    border-radius: 50%;
    background-color: red;
  }
  
`;
export const ContainerLinksStyled = styled.div`

    display:flex;
    justify-content: space-evenly;
    align-items: center;
    block-size: 89px;
    min-inline-size: 500px;

    a{
      padding: .5em 1em;
      border-radius: 3px;
      font-size: 1.2rem;
      background-color:  #000000;
      border: 1px solid #fff;
      color: #fff;
      text-decoration: none;
    }
`;

export const ResponseStyled = styled.div`

  
  padding: 12px;
  text-align: center;
  background-color: #0a0a0a;

`;