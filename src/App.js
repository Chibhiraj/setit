import React from 'react';
import './App.css';

import HomePage from './homePage';
import Admin from './adminPage'
import { Routes,Route } from 'react-router';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/admin" element={<Admin/>} /> 
  </Routes> 
  
  );
}

export default App;
