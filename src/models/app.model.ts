export interface QuestionProps {
  numberPage?: string,
  question?: string,
  status?: boolean,
  imgVideo?: string,
  srcVideo?: string
  time?: number;
  stateButton?: string;
}


export interface AppProps {
  response: string[];
  question: QuestionProps[];
}