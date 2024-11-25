import React from 'react';
import './About.css'; // Custom CSS file for styles

// Hero Image and Icons
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';

// Team Member Images
import teamMember1 from '../assets/images/team-member1.png';
import teamMember2 from '../assets/images/team-member2.jpg';
import teamMember3 from '../assets/images/team-member3.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>About Ritual</h1>
          <p>Your trusted partner in delivering the best.</p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We’re for restaurants and the people who love them. Our mission is to bring convenience, quality, and innovation to the dining experience. Whether you’re grabbing lunch or planning a team dinner, Ritual makes it simple.
          </p>

          {/* YouTube Video Embed */}
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/bFKDtoBr2A4"
              title="Ritual Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <img src={icon1} alt="Customer First Icon" />
            <h3>Customer First</h3>
            <p>We prioritize customer satisfaction above all else.</p>
          </div>
          <div className="value-item">
            <img src={icon2} alt="Innovation Icon" />
            <h3>Innovation</h3>
            <p>We constantly innovate to bring you the best services.</p>
          </div>
          <div className="value-item">
            <img src={icon3} alt="Community Icon" />
            <h3>Community</h3>
            <p>Building stronger communities through collaboration.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={teamMember1} alt="Ray Reddy" />
            <h3>Ray Reddy</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={teamMember2} alt="John Smith" />
            <h3>John Smith</h3>
            <p>Head of Marketing</p>
          </div>
          <div className="team-member">
            <img src={teamMember3} alt="Emily Davis" />
            <h3>Emily Davis</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <h2>Our Impact</h2>
        <p>
          At Ritual, we believe in giving back. Over the past year, we’ve helped over 10,000 local restaurants grow their businesses while saving customers over 1 million hours of time. Together, we’re making dining more convenient and community-driven.
        </p>
        <div className="impact-stats">
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Restaurants Supported</p>
          </div>
          <div className="stat-item">
            <h3>1M+</h3>
            <p>Hours Saved</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Global Cities</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Join the Ritual</h2>
        <p>Experience the best of what Ritual has to offer.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default About;
