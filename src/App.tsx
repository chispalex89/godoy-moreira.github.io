import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Invitation from './components/Invitation/Invitation';
import ConfirmationViewer from './components/ConfirmationViewer/ConfirmationViewer';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Invitation,
  },
  {
    path: '/confirmation-viewer',
    Component: ConfirmationViewer,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router}/>;
};

export default App;
