import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Index, loader as clientsLoader } from './pages/Index';
import { NewClient, action as newClientAction } from './pages/NewClient';
import { EditClient, loader as editClientLoader } from './pages/EditClient';

import { Layout } from './components/Layout';
import { ErrorPage } from './components/ErrorPage';

import './index.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/nuevo',
        element: <NewClient />,
        action: newClientAction,
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditClient />,
        loader: editClientLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
