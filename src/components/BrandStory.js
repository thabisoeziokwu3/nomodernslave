import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="brand-story">
      <div className="brand-story-container">
        <div className="brand-story-content">
          <span className="section-eyebrow">The Movement</span>
          <h2 className="section-title">More Than Fashion — It's a Statement</h2>
          <div className="brand-divider"></div>
          
          <div className="brand-text-block">
            <p className="brand-highlight">
              "No Modern Slave" — the name itself is a declaration of independence.
            </p>
            <p>
              Founded in 2014 by South African creative <strong>Gift Kgosierileng</strong>, 
              known as Kgosi, the brand emerged from a powerful moment of resistance. When pressure 
              mounted to commercialize and westernize his Afrocentric designs, Kgosi chose a different 
              path — one that honored his roots instead of abandoning them.
            </p>
          </div>

          <div className="brand-text-block">
            <h3>Inspired by Mother, Rooted in Heritage</h3>
            <p>
              At the heart of No Modern Slave lies a deeply personal story. Kgosi's late mother 
              (Mme) served as his primary inspiration. Her influence flows through every garment, 
              from the careful selection of African prints to the nature-inspired textures that 
              define his aesthetic. Each collection carries forward her spirit — a tribute woven 
              into fabric.
            </p>
          </div>

          <div className="brand-text-block">
            <h3>The Khoi San Legacy</h3>
            <p>
              More than just creating fashion, No Modern Slave actively works to preserve and 
              promote Khoi San heritage. The brand incorporates traditional Khoi San geometric 
              patterns, storytelling elements, and craft techniques into contemporary silhouettes. 
              This isn't appropriation — it's preservation through innovation.
            </p>
          </div>

          <div className="brand-text-block">
            <h3>Project Runway & Beyond</h3>
            <p>
              In 2019, Kgosi brought his vision to a national stage, competing in 
              <strong> Project Runway South Africa</strong>. The exposure introduced his powerful 
              message to a wider audience, cementing No Modern Slave as a brand that challenges 
              convention while celebrating African identity.
            </p>
          </div>

          <div className="brand-values">
            <div className="value-item">
              <span className="value-icon">✊</span>
              <h4>Cultural Liberation</h4>
              <p>Freeing African fashion from Western dominance</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🌍</span>
              <h4>Heritage Preservation</h4>
              <p>Keeping Khoi San traditions alive through design</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🎨</span>
              <h4>Artisanal Craft</h4>
              <p>Honoring traditional techniques in modern pieces</p>
            </div>
          </div>

          <Link to="/about" className="btn btn-secondary">
            Read the Full Story
          </Link>
        </div>

        <div className="brand-story-visual">
          <div className="story-image-main">
            <div className="image-placeholder">
              <span>Brand Image</span>
            </div>
          </div>
          <div className="story-quote-card">
            <p className="quote-text">
              "I refuse to be a slave to Western pop culture. My designs are my resistance."
            </p>
            <p className="quote-author">— Gift "Kgosi" Kgosierileng</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;