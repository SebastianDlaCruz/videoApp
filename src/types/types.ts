import { QuestionProps } from "@models/app.model";


export type ImagesProps = {
  src?: string
}



export type Actions =
  { type: "SET_STATE_QUESTION", payload: QuestionProps[] }
  | { type: "SET_RESPONSE", payload: string[] };
