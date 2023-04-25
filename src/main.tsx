import "normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import AppProvider from "./context/AppProvider";
import { router } from "./routes/router";
import { GlobalStyled } from "./styled-components/setting/GlobalStyled.styled";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <GlobalStyled />
    </AppProvider>
  </React.StrictMode>,
);
