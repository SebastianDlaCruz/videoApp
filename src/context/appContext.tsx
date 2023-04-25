import { AppProps } from "@models/app.model";
import { createContext } from "react";
import data from "../data/data";
import { Actions } from "../types/types";

// eslint-disable-next-line react-refresh/only-export-components
export const initialStateApp: AppProps = {
  response: [],
  question: data
};

const AppContext = createContext<{
  state: AppProps
  dispatch: React.Dispatch<Actions>
}>({
  state: initialStateApp,
  dispatch: () => null
});

export default AppContext;