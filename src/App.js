import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import for routing
import Header from './reusable/Header';
import Footer from './reusable/Footer';
import AppPage from './AppPage'; // Import the AppPage component

function App() {
  return (
    <div>
      <Header />
      <main>
        <div>
          <h1>Welcome to Ritual Website</h1>
          <Routes>  
            <Route path="/AppPage" element={<AppPage />} />  {/* Define the route */}
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
