import { useReducer } from "react";
import { reducerApp } from "../utilities/index.utilities";
import AppContext, { initialStateApp } from "./appContext";
interface Props {
  children: JSX.Element | JSX.Element[]
}

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducerApp, initialStateApp);
  return (
    <AppContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;