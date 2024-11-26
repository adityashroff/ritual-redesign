import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './reusable/Header';  
import Footer from './reusable/Footer';
import About from './About/About'; 
const App=() => {
  return (
    <div>
      <Header />
      <main>
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
    </div>
  );
};

export default App;
