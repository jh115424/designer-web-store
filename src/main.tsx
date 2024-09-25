import Apparel from "./Pages/MensApparelPage";
import Jewelery from "./Pages/JeweleryPage";
import "./Pages/HomeStore.css";
import "./Pages/MensApparelPage.css";
import "./Pages/JeweleryPage.css";

import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import HomeStorePage from "./Pages/HomeStoreApp";

const router = createBrowserRouter([
  {
    path: "home",
    element: <HomeStorePage />,
  },
  {
    path: "/apparel",
    element: <Apparel />,
  },
  {
    path: "/jewelery",
    element: <Jewelery />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
