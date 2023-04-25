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