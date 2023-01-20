import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import { App } from "./App";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "features/home/routes/home";
import { ErrorPage } from "components/error-page/error-page";
import { Movies } from "features/media/routes/movies/routes/movies";
import { MoviesSelected } from "features/media/routes/movies/routes/movies-selected";
import { SeriesSelected } from "features/media/routes/series/routes/series-selected";
import { Series } from "features/media/routes/series/routes/series";
import { PrivateWrapper } from "components/private-route/private-route";
import { Login } from "features/auth/routes/login";
import { Register } from "features/auth/routes/register";
import { UnderConstruction } from "features/under-construction/under-construction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: (
          <PrivateWrapper>
            <Home />
          </PrivateWrapper>
        ),
        index: true,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/movies",
        children: [
          {
            index: true,
            element: (
              <PrivateWrapper>
                <Movies />
              </PrivateWrapper>
            ),
          },
          {
            path: "/movies/:id",
            element: (
              <PrivateWrapper>
                <MoviesSelected />
              </PrivateWrapper>
            ),
          },
        ],
      },
      {
        path: "/series",
        children: [
          {
            index: true,
            element: (
              <PrivateWrapper>
                <Series />
              </PrivateWrapper>
            ),
          },
          {
            path: "/series/:id",
            element: (
              <PrivateWrapper>
                <SeriesSelected />
              </PrivateWrapper>
            ),
          },
        ],
      },
      {
        path: "/search",
        children: [
          {
            index: true,
            element: (
              <PrivateWrapper>
                <UnderConstruction />
              </PrivateWrapper>
            ),
          },
        ],
      },
      {
        path: "/terms",
        children: [
          {
            index: true,
            element: (
              <PrivateWrapper>
                <UnderConstruction />
              </PrivateWrapper>
            ),
          },
        ],
      },
      {
        path: "/privacy",
        children: [
          {
            index: true,
            element: (
              <PrivateWrapper>
                <UnderConstruction />
              </PrivateWrapper>
            ),
          },
        ],
      },
      {
        path: "/profile",
        children: [
          {
            index: true,
            element: (
              <PrivateWrapper>
                <UnderConstruction />
              </PrivateWrapper>
            ),
          },
        ],
      },
      {
        path: "/help",
        children: [
          {
            index: true,
            element: (
              <PrivateWrapper>
                <UnderConstruction />
              </PrivateWrapper>
            ),
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
