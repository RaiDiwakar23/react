import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";
import Home from "./../pages/Home";
import Services from "./../pages/Services";
import About from "./../pages/About";
import Contact from "./../pages/Contact";
import Profile from "../component/Profile/Profile";
import MyProfile from "../component/Profile/MyProfile";
import Settings from "../component/Profile/Settings";

export let routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          { path: "/profile", element: <MyProfile /> },
          { path: "setting", element: <Settings /> },
        ],
      },
    ],
  },
]);
