import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Invitation from './components/Invitation/Invitation';

const router = createBrowserRouter([
  {
    path:'/',
    Component: Invitation
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
