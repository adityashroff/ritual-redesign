import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/components/Homepage'; 
// import AboutPage from './components/AboutPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Root route */}
      <Route path="/AppPage" element={<AppPage />} /> 
    </Routes>
  );
};

export default AppRoutes;
