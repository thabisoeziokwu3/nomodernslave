import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Our Story</h1>
        <p>The movement behind No Modern Slave</p>
      </div>

      <div className="about-container">
        <section className="about-section">
          <div className="about-content">
            <span className="section-eyebrow">The Genesis</span>
            <h2>Born from Resistance</h2>
            <div className="brand-divider"></div>
            
            <p>
              In 2014, Gift Kgosierileng — known to the world as <strong>Kgosi</strong> — 
              faced a defining moment. His Afrocentric designs, deeply rooted in African 
              heritage and Khoi San traditions, were gaining attention. But with that 
              attention came pressure — pressure to commercialize, to westernize, to dilute 
              the very essence of what made his work meaningful.
            </p>
            
            <p>
              Kgosi's response was the creation of <strong>No Modern Slave</strong> — not just 
              as a clothing label, but as a declaration. A trademark that embodied his refusal 
              to become what he called "a slave to Western pop culture." The name itself was 
              the mission statement.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder large">
              <span>Kgosi Portrait</span>
            </div>
          </div>
        </section>

        <section className="about-section reverse">
          <div className="about-content">
            <span className="section-eyebrow">Inspiration</span>
            <h2>A Mother's Legacy</h2>
            <div className="brand-divider"></div>
            
            <p>
              Behind every stitch at No Modern Slave lies the spirit of Kgosi's late mother 
              — affectionately remembered as <strong>Mme</strong>. She was the wellspring of 
              his creativity, instilling in him an appreciation for African aesthetics, natural 
              textures, and the power of clothing as cultural expression.
            </p>
            
            <p>
              The patterns, the hand-selected fabrics, the nature-inspired color palettes — 
              all carry forward her influence. In honoring his mother, Kgosi created a brand 
              that honors all the mothers, grandmothers, and ancestors who preserved African 
              identity through generations of challenge and change.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder large">
              <span>Inspiration Image</span>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <span className="section-eyebrow">Heritage</span>
            <h2>Preserving the Khoi San Legacy</h2>
            <div className="brand-divider"></div>
            
            <p>
              The Khoi San people represent the oldest known inhabitants of Southern Africa, 
              with a cultural heritage stretching back tens of thousands of years. Their 
              geometric rock art, oral storytelling traditions, and intimate connection with 
              the natural world form the philosophical foundation of No Modern Slave.
            </p>
            
            <p>
              Through contemporary fashion, Kgosi translates ancient Khoi San patterns and 
              motifs into wearable art. This isn't cultural appropriation — it's cultural 
              <strong> preservation</strong>. Each geometric design, each earth-toned palette, 
              each nature-inspired texture serves as an ambassador for a heritage at risk of 
              being forgotten.
            </p>
            
            <p>
              The brand also collaborates directly with Khoi San artisans, ensuring that the 
              communities whose traditions inspire the work also benefit from its success.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder large">
              <span>Khoi San Heritage</span>
            </div>
          </div>
        </section>

        <section className="about-section reverse">
          <div className="about-content">
            <span className="section-eyebrow">Milestone</span>
            <h2>Project Runway South Africa</h2>
            <div className="brand-divider"></div>
            
            <p>
              In 2019, No Modern Slave reached a national audience when Kgosi competed in 
              <strong> Project Runway South Africa</strong>. The platform introduced his 
              powerful message — and his striking designs — to viewers across the country 
              and beyond.
            </p>
            
            <p>
              On the runway, Kgosi's pieces stood apart. They weren't just garments; they 
              were statements. They challenged the judges and the audience to reconsider what 
              African fashion could be — not an imitation of European trends, but a confident 
              expression of indigenous creativity.
            </p>
            
            <p>
              The exposure cemented No Modern Slave's position in South African fashion and 
              expanded its community of supporters who believe in the movement.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder large">
              <span>Project Runway SA</span>
            </div>
          </div>
        </section>

        <section className="about-values-section">
          <h2>What We Stand For</h2>
          <div className="brand-divider"></div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-large">✊</div>
              <h3>Cultural Liberation</h3>
              <p>
                We refuse to let Western standards dictate African creativity. Every No Modern 
                Slave piece is an act of creative sovereignty — fashion freed from the 
                colonial gaze.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-large">🌍</div>
              <h3>Heritage Preservation</h3>
              <p>
                Through our designs and collaborations with Khoi San artisans, we actively 
                work to keep ancient traditions alive, relevant, and valued in the 
                contemporary world.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-large">🤲</div>
              <h3>Community Upliftment</h3>
              <p>
                We believe fashion should benefit the communities that inspire it. We partner 
                with local artisans, use ethical production practices, and reinvest in 
                cultural preservation efforts.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-large">🌱</div>
              <h3>Sustainable Practice</h3>
              <p>
                Drawing from indigenous wisdom about living in harmony with nature, we 
                prioritize sustainable materials and production methods that respect 
                the earth.
              </p>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <h2>Become Part of the Movement</h2>
          <p>
            No Modern Slave is more than a brand — it's a community of people who believe in 
            cultural pride, creative freedom, and the power of fashion to tell important stories.
          </p>
          <a href="/shop" className="btn btn-primary">
            Shop the Collection
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;