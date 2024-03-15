import React from "react";
import "bulma/css/bulma.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Contact from "./Contact";
import About from "./About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About/>,
    //errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    //errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
