import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/components/Homepage';
import About from '../src/components/About';
import AppPage from '../src/components/AppPage';
import Business from '../src/components/Business';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/apppage" element={<AppPage />} />
      <Route path="/Business" element={<Business />} />
      
    </Routes>
  );
};

export default AppRoutes;
