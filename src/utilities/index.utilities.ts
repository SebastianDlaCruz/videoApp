import { AppProps } from "@models/app.model";
import { Actions } from "../types/types";

export const reducerApp = (state: AppProps, action: Actions) => {
  switch (action.type) {
    case "SET_STATE_QUESTION":
      return {
        ...state,
        question: action.payload
      };

    case "SET_RESPONSE":
      return {
        ...state,
        response: action.payload
      };
    default:
      return state;
  }
};


