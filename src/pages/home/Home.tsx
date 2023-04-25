import ContainerCards from "@components/ContainerCards";
import Header from "@components/Header";
import { ResponseStyled } from "@styled/components/index.styled";
import { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import AppContext from "../../context/appContext";
const Home = () => {
  const { preguntaId } = useParams();
  const { state } = useContext(AppContext);

  let result = "";

  if (state.response.length !== 0) {

    result = JSON.stringify(state.response);
  }

  return (
    <>
      <Header />
      {
        (!preguntaId) ? (<ContainerCards />) : (<Outlet />)
      }
      {
        result !== ""
          ? (<ResponseStyled>
            <h2>Respuesta JSON</h2>
            <p>{result}</p>
          </ResponseStyled>)
          : (null)
      }

    </>
  );
};

export default Home;
