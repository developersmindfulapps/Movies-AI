import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../components/pages/About";
import Contactus from "../components/pages/Contactus";
import Body from "../components/Body";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Body},
      {path: '/browse', Component: Body },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contactus },
    ],
  },
]);

export default router;
