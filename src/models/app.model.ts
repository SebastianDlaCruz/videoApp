export interface QuestionProps {
  numberPage: string,
  question: string,
  status: boolean,
  imgVideo: string,
  srcVideo: string
}


export interface AppProps {
  stateOverall: boolean;
  question: QuestionProps[];
}