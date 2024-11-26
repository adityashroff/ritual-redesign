import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes'; // Import the routing logic
import Header from './reusable/Header'; // Common Header
import Footer from './reusable/Footer'; // Common Footer
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './reusable/Header';  
import Footer from './reusable/Footer';
import About from './About/About'; 

const App=() => {
  return (
    <Router>
      <Header />
      <main>
        <AppRoutes />
        <div>
          <h1>Welcome to Ritual Website</h1>
        </div>
        <Router>
      <Routes>
        {/* Add this Route */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
