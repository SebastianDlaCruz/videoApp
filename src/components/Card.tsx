import { CardStyled } from "@styled/components/index.styled";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/appContext";
import Button from "./Button";
import play from "/assets/play.svg";
interface Props {
  text: string;
  src: string;
  page: string

}
const Card = ({ text, src, page }: Props) => {
  const { state } = useContext(AppContext);
  const number = Number(page);
  return (
    <CardStyled to={`pregunta/${page}`}
      src={state.question[number - 1].imgVideo || src} >
      <Link to={`pregunta/${page}`}>
        <footer>
          <p>{text}</p>
        </footer>
        <Button src={play} />
      </Link >
    </CardStyled>
  );
};

export default Card;