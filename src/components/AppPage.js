import React from "react";
import "../styles/AppPage.css";

// Import the restaurant image
import RestImage from "../assets/images/Rest.jpeg";

const AppPage = () => {
  return (
    <div className="app-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Ritual</h1>
          <p>
            Discover top local restaurants, order ahead, and unlock exclusive rewards. Make dining easy with Ritual!
          </p>
          <button className="cta-button">Order Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Ritual?</h2>
        <div className="features-container">
          <div className="feature-card">
            <h3>Order Ahead</h3>
            <p>Save time by skipping lines with easy pick-up.</p>
          </div>
          <div className="feature-card">
            <h3>Earn Rewards</h3>
            <p>Get rewards and discounts with every order.</p>
          </div>
          <div className="feature-card">
            <h3>Group Orders</h3>
            <p>Coordinate orders with colleagues and friends seamlessly.</p>
          </div>
        </div>
      </section>

      {/* Restaurant Image Section */}
      <section className="menu-section">
        <div className="menu-container">
          <img src={RestImage} alt="Restaurant" className="rest-image" />
          <div className="menu-text">
            <h2>Experience the Best Dining</h2>
            <p>Enjoy a welcoming ambiance with the finest cuisines.</p>
            <p>Our restaurant is designed for your comfort and delight.</p>
            <p>Perfect for gatherings, celebrations, or casual meals.</p>
            <p>Savor every bite with our carefully curated menu.</p>
            <p>Ritual - where every meal becomes a memorable moment.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Download the App Today!</h2>
        <p>
          Unlock the full potential of Ritual by downloading the app on iOS or Android.
        </p>
        <button className="cta-download-button">Get the App</button>
      </section>
    </div>
  );
};

export default AppPage;