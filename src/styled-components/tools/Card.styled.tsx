import { css } from "styled-components";
import { ImagesProps } from "../../types/types";
export const Card = css<ImagesProps>`
position: relative;
display: block;
block-size: 393px;
inline-size: 245px;
padding: 22px;
border: 1px solid #fff;
border-radius: 12px;
text-align: center;

background-image: url(${({ src }) => src})  ;
background-repeat: no-repeat;
background-size: cover;


footer{
  position: absolute;
  inset-block-end: 0;
  inset-inline: 0;
  max-block-size: 78px;
  max-inline-size: 100%;
  padding: 12px;
  border-end-end-radius: 12px;
  border-end-start-radius: 12px;
  background-color: #413f3fb3;
}
`;