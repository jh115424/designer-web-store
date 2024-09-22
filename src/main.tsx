import HomePage from './Pages/HomePage'
import NotFoundPage from './Pages/NotFoundPage'
import ProfilePage from './Pages/ProfilePage'
import ProfilesPage from './Pages/ProfilesPage'


import './index.css'

import  ReactDOM  from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/profiles',
    element: <ProfilesPage />,
    children: [
      {
        path: '/profiles/:profileId',
        element: <ProfilePage />,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)