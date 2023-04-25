import { ContainerCadsStyled } from "@styled/components/ContainerCadsStyled.styled";
import { useContext } from "react";
import AppContext from "../context/appContext";
import Card from "./Card";
import imgDefault from "/assets/defaultImg.jpg";
const ContainerCards = () => {

  const { state } = useContext(AppContext);

  return (
    <ContainerCadsStyled>
      {state.question.map(item => <Card text={item.question} src={item.imgVideo || imgDefault} page={item.numberPage} />)}
    </ContainerCadsStyled>
  );
};

export default ContainerCards;
