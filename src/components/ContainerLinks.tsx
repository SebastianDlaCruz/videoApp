
import { ContainerLinksStyled } from "@styled/components/index.styled";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/appContext";
interface Props {
  idPage: number;
}

const ContainerLinks = ({ idPage }: Props) => {

  const next = idPage + 1;
  const back = idPage - 1;
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);

  const handlerSend = () => {
    const response = state.question.some(item => item.status === false);

    if (!response) {
      const responseUrls: string[] = [];
      state.question.forEach(items => {
        responseUrls.push(items.srcVideo || "");
      });

      console.log(responseUrls);
      dispatch({
        type: "SET_RESPONSE",
        payload: responseUrls
      });
      navigate("/");
    }
  };


  return (
    <ContainerLinksStyled>
      {
        (back === 0)
          ? (<Link to={"/"}>Ir al inicio</Link>)
          : (<Link to={`/pregunta/${back}`}>Atrás</Link>)
      }

      {
        (next === 4)
          ? (<button onClick={handlerSend}>Enviar</button>)
          : (<Link to={`/pregunta/${next}`}>Siguiente</Link>)
      }
    </ContainerLinksStyled>
  );
};

export default ContainerLinks;
