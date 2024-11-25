import React from "react";
import Header from "./reusable/Header";
import Footer from "./reusable/Footer";
import BusinessPage from "./pages/Business";
function App() {
  return (
    <div>
      <Header />
      <main>
        <div>
          <BusinessPage />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
