import React, { useState } from "react";
import "../styles/Business.css";
import BusinessImage from "../assets/images/business4.png";
import BusinessImage2 from "../assets/images/business5.png";

import {
  MessageCircle,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
function BusinessPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <MessageCircle />,
      title: "Order together",
      description: "Foster team bonding through shared meals",
    },
    {
      icon: <Users />,
      title: "Team management",
      description: "Easily manage food preferences and dietary restrictions",
    },
    {
      icon: <Calendar />,
      title: "Flexible scheduling",
      description: "Set up recurring orders or one-time events",
    },
  ];

  const benefits = [
    "Boost team morale and productivity",
    "Simplify meal planning and ordering",
    "Accommodate diverse dietary needs",
    "Streamline expense management",
  ];

  const setupSteps = [
    {
      title: "1. Invite your team",
      description: "Quickly add members to your account",
    },
    {
      title: "2. Set up your program",
      description: "Customize options to fit your needs",
    },
    {
      title: "3. Customize notifications",
      description: "Keep everyone informed and engaged",
    },
  ];

  const trustedCompanies = [
    { name: "SAP", logo: require("../assets/images/sap.svg").default },
    { name: "CPA", logo: require("../assets/images/cpa.svg").default },
    { name: "KPMG", logo: require("../assets/images/kpmg.svg").default },
    {
      name: "CoinSquare",
      logo: require("../assets/images/coinsquare.svg").default,
    },
    {
      name: "Scotiabank",
      logo: require("../assets/images/scotiabank.svg").default,
    },
    { name: "Reddit", logo: require("../assets/images/reddit.svg").default },
    {
      name: "Wunderman",
      logo: require("../assets/images/wunderman.svg").default,
    },
  ];

  return (
    <div className="landingPage">
      {/* Hero Section */}
      <section className="hero">
        <div className="heroContent">
          <h1 className="heroTitle">
            A new kind of work perk your team will love
          </h1>
          <p className="heroDescription">
            Empower your workplace with food benefits that create a positive and
            healthy culture.
          </p>
          <button className="ctaButton">Get Started</button>
        </div>
        <div className="heroImage">
          <img src={BusinessImage} alt="Happy team enjoying food" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="sectionTitle">
          Build an attractive workplace experience
        </h2>
        <div className="featureCards">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`featureCard ${
                activeFeature === index ? "activeFeature" : ""
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="featureIcon">{feature.icon}</div>
              <h3 className="featureTitle">{feature.title}</h3>
              <p className="featureDescription">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="benefitsContent">
          <h2 className="sectionTitle">Benefits for Your Business</h2>
          <ul className="benefitsList">
            {benefits.map((benefit, index) => (
              <li key={index} className="benefitItem">
                <CheckCircle className="benefitIcon" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="benefitsImage">
          <img src={BusinessImage2} alt="Team collaboration" />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trustedBy">
        <h2 className="sectionTitle">Trusted by</h2>
        <div className="companyLogos">
          {trustedCompanies.map((company, index) => (
            <div key={index} className="companyLogo">
              <img src={company.logo} alt={`${company.name} logo`} />
            </div>
          ))}
        </div>
      </section>

      {/* Setup Section */}
      <section className="setup">
        <h2 className="sectionTitle">
          Setting up is easy with the self-serve portal
        </h2>
        <div className="setupSteps">
          {setupSteps.map((step, index) => (
            <div key={index} className="setupStep">
              <h3 className="stepTitle">{step.title}</h3>
              <p className="stepDescription">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2 className="ctaTitle">Ready to transform your workplace?</h2>
        <p className="ctaDescription">
          Join the companies already benefiting from our innovative food perk
          solution.
        </p>
        <button className="ctaButton">
          Schedule a Demo <ArrowRight className="ctaIcon" />
        </button>
      </section>
    </div>
  );
}

export default BusinessPage;
