import ContainerCards from "@components/ContainerCards";
import Header from "@components/Header";
import { Outlet, useParams } from "react-router-dom";
const Home = () => {
  const { preguntaId } = useParams();
  return (
    <>
      <Header />
      {
        (!preguntaId) ? (<ContainerCards />) : (<Outlet />)
      }
    </>
  );
};

export default Home;
