import { ContainerCadsStyled } from "@styled/components/index.styled";
import { useContext } from "react";
import AppContext from "../context/appContext";
import Card from "./Card";
import imgDefault from "/assets/defaultImg.jpg";
const ContainerCards = () => {

  const { state } = useContext(AppContext);

  return (
    <ContainerCadsStyled>
      {state.question.map((item, index) => <Card text={item.question || ""} key={index}
        src={item.imgVideo || imgDefault} page={item.numberPage || ""} />)}
    </ContainerCadsStyled>
  );
};

export default ContainerCards;
