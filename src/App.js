import React, { useEffect } from 'react';
import './App.css';
import PrivateRoutes from './utils/PrivateRoutes';
import HomePage from './LandingPage/homePage';
import Admin from './adminPage/adminPage';
import { Routes, Route, useLocation } from 'react-router';

function App() {
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.removeItem('user');
    }, 600000); 
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path={'/admin'} element={<Admin />} />
      </Route>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
