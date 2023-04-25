import { FlexBox } from "@styled/tools/Tools.styled";
import styled from "styled-components";
import { ImagesProps } from "../../types/types";

export const ButtonStyled = styled.button<ImagesProps>`
  position: absolute;
  inset-block-end: 25%;
  inset-inline-start: 8%;
  padding: 1.5em;
  border: none;
  border-radius: 50%;
  background: url(${({ src }) => src}) no-repeat center  / 26%  #ffffff97;
`;

export const ContainerCadsStyled = styled.div`
  ${FlexBox};
  flex-wrap: wrap;
  gap: 66px;
`;


export const HeaderStyled = styled.header`
    padding: 1.3em 0;
    text-align: center;
`;

export const ContainerVideoStyled = styled.article`
    position: relative;
    ${FlexBox};
    block-size: 708px;
    inline-size: 864px;
    border: 1px solid #fff;

`;