import Video from "@components/Video";
import Home from "@pages/home/Home";
import {
  createBrowserRouter
} from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "pregunta/:preguntaId",
        element: <Video />
      }
    ]
  },
  {
    path: "/prueba",
    element: <Video />,
  }
]);