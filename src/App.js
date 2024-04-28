import React from 'react';
import './App.css';

import HomePage from './LandingPage/homePage';
import Admin from './adminPage/adminPage'
// import Event from './eventsAdmin'
import { Routes,Route } from 'react-router';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/admin" element={<Admin/>} /> 
      {/* <Route path="/admin/event" element={<EventsAdmin/>} />  */}
      
  </Routes> 
  
  );
}

export default App;
