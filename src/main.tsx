
import Apparel from './Pages/ApparelPage'
import Shoes from './Pages/ShoesPage'
import './Pages/HomeStore.css'




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
    path: "/shoes",
    element: <Shoes/>,
  },


 
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)