import { AppProps } from "@models/app.model";
import { Actions } from "../types/types";

export const reducerApp = (state: AppProps, action: Actions) => {
  switch (action.type) {
    case "SET_IMAGE":
      return {
        ...state,
        question: action.payload
      };
    default:
      return state;
  }
};