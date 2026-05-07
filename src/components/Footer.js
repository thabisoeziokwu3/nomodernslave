import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">NO MODERN SLAVE</h3>
          <p className="footer-tagline">by Kgosi</p>
          <p className="footer-description">
            A movement in fashion. Preserving Khoi San heritage through contemporary African design. 
            Not just clothing — a statement of cultural pride and liberation.
          </p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FiFacebook />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Shop</h4>
          <Link to="/shop">All Products</Link>
          <Link to="/shop?collection=Heritage">Heritage Collection</Link>
          <Link to="/shop?collection=Core">Core Collection</Link>
          <Link to="/shop?collection=Artisanal">Artisanal Collection</Link>
          <Link to="/shop?collection=Limited+Edition">Limited Edition</Link>
        </div>

        <div className="footer-section">
          <h4>Brand</h4>
          <Link to="/about">Our Story</Link>
          <Link to="/about">The Movement</Link>
          <Link to="/about">Khoi San Heritage</Link>
          <Link to="/about">Project Runway SA</Link>
        </div>

        <div className="footer-section">
          <h4>Contact & Info</h4>
          <p><FiMapPin className="contact-icon" /> Johannesburg, South Africa</p>
          <p><FiMail className="contact-icon" /> info@nomodernslave.co.za</p>
          <Link to="/about">Size Guide</Link>
          <Link to="/about">Shipping & Returns</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} No Modern Slave by Kgosi. All rights reserved.</p>
        <p className="footer-quote">"I refuse to be a slave to Western pop culture." — Gift Kgosierileng</p>
      </div>
    </footer>
  );
};

export default Footer;