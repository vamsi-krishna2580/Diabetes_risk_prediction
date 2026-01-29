import { createHashRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Assessment from "./pages/Assessment";
import Result from "./pages/Result";
import About from "./pages/About";

export const router = createHashRouter([
  { path: "/", element: <Welcome /> },
  { path: "/assessment", element: <Assessment /> },
  { path: "/result", element: <Result /> },
  { path: "/about", element: <About /> },
]);
