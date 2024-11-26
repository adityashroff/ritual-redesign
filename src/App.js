import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes'; // Import the routing logic
import Header from './reusable/Header'; // Common Header
import Footer from './reusable/Footer'; // Common Footer

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
