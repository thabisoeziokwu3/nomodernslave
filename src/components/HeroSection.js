import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-eyebrow">Est. 2014 • Johannesburg</p>
        <h1 className="hero-title">
          NO MODERN
          <br />
          SLAVE
        </h1>
        <p className="hero-subtitle">by Gift Kgosierileng</p>
        <div className="hero-divider"></div>
        <p className="hero-description">
          Afrocentric fashion with a social consciousness. Born from resistance, 
          crafted with purpose — preserving Khoi San heritage through contemporary design.
        </p>
        <div className="hero-buttons">
          <Link to="/shop" className="btn btn-primary">
            Shop the Collection
          </Link>
          <Link to="/about" className="btn btn-outline">
            Discover Our Story
          </Link>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default HeroSection;