import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import Invitation from './components/Invitation/Invitation';
import ConfirmationViewer from './components/ConfirmationViewer/ConfirmationViewer';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Invitation />} />
        <Route path="/confirmation-viewer" element={<ConfirmationViewer />} />
      </Routes>
    </Router>
  );
};

export default App;
