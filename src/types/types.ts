import { QuestionProps } from "@models/app.model";


export type ImagesProps = {
  src?: string
}



export type Actions =
  { type: "SET_IMAGE", payload: QuestionProps[] }
  | { type: "SET_VIDEO", payload: QuestionProps[] };
