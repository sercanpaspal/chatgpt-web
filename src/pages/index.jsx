import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Chat from './Chat';
import Settings from './Settings';
import Prompts from './Prompts';
import Home from './Home';

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
        path: '/chat',
        element: <Chat />,
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
