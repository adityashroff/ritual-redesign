import React from 'react';
import AppRoutes from './Routes'; // Import the routing logic
import Header from './reusable/Header'; // Common Header
import Footer from './reusable/Footer'; // Common Footer
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
