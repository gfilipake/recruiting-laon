import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "features/home/routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/login",
        element: <></>,
      },
      {
        path: "/movies",
        element: <></>,
      },
      {
        path: "/series",
        element: <></>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
