import React from 'react';
import './App.css';

import HomePage from './homePage';
import Admin from './adminPage'
import { Router,Route } from 'react-router';

function App() {
  return (
    <div>
{/*     
      <Router>
     
        <Route path="/" element={<HomePage />} />
      
    </Router> */}
    <HomePage/>
    <Admin/>
    </div>
  );
}

export default App;
