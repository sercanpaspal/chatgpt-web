import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './Home';
import Settings from './Settings';
import Prompts from './Prompts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/prompts',
        element: <Prompts />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
]);

function Pages() {
  return (
    <RouterProvider router={router} />
  );
}

export default Pages;
