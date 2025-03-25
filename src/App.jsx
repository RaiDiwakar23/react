import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes.jsx/MyRoutes";

const App = () => {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default App;
