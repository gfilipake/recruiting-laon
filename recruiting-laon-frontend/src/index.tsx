import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "features/home/routes/home";
import { ErrorPage } from "components/error-page/error-page";
import { Movies } from "features/media/routes/movies/routes/movies";
import { MoviesSelected } from "features/media/routes/movies/routes/movies-selected";
import { SeriesSelected } from "features/media/routes/series/routes/series-selected";
import { Series } from "features/media/routes/series/routes/series";

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
        path: "/register",
        element: <></>,
      },
      {
        path: "/movies",
        children: [
          {
            index: true,
            element: <Movies />,
          },
          {
            path: "/movies/:id",
            element: <MoviesSelected />,
          },
        ],
      },
      {
        path: "/series",
        children: [
          {
            index: true,
            element: <Series />,
          },
          {
            path: "/series/:id",
            element: <SeriesSelected />,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
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
