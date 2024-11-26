import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes'; 
import Header from './reusable/Header'; 
import Footer from './reusable/Footer'; 


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
