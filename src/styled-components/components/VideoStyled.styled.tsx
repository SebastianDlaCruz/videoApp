import { Card } from "@styled/tools/Card.styled";
import styled from "styled-components";
export const VideoStyled = styled.article`

    ${Card};
    
    block-size: clamp(393px ,75%,708px);
    inline-size:clamp(245px ,75%,864px);
    padding: 0;
    video{
      block-size: 100%;
      inline-size: 100%;
      padding: 0;
    }
`;  