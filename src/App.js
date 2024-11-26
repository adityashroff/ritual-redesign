import React from 'react';
import Header from './reusable/Header';  
import Footer from './reusable/Footer';
import Homepage from './components/Homepage';
function App() {
  return (
    <div>
      <Header />
      <main>
        <div>
          < Homepage />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
