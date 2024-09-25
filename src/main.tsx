
import Apparel from './Pages/MensApparelPage'
import Jewelry from './Pages/JewelryPage'
// import Jewelry from "./Pages/JewelryPage.css"
import './Pages/HomeStore.css'
import './Pages/MensApparelPage.css'
import './Pages/JewelryPage.css'





import  ReactDOM  from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import HomeStorePage from './Pages/HomeStoreApp'

const router = createBrowserRouter([
  {
    path: "home",
    element: <HomeStorePage/>,
  },
  {
    path: "/apparel",
    element: <Apparel />,
  },
  {
    path: "/jewelry",
    element: <Jewelry/>,
  },


 
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)