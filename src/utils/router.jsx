import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../components/pages/About";
import Contactus from "../components/pages/Contactus";
import Bodyout from "../components/Bodyout";
import getNowPlayingMovies from "./useMovieData";
import Browse from "../components/Browse";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Bodyout},
      {path: '/browse', Component: Browse, loader: getNowPlayingMovies },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contactus },
    ],
  },
]);

export default router;
