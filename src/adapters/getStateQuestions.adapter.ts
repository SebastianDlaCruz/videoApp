import { QuestionProps } from "@models/app.model";



export const getStateQuestions = (item: QuestionProps, preguntaId: string | undefined, props: QuestionProps) => {


  if (item.numberPage === preguntaId) {
    return {
      ...item,
      ...props
    };
  }



  return item;
};