import React from 'react';
import HeroSection from '../components/HeroSection';
import BrandStory from '../components/BrandStory';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="home-page">
      <HeroSection />
      <BrandStory />

      <section className="featured-products-section">
        <div className="section-container">
          <span className="section-eyebrow">The Collection</span>
          <h2 className="section-title">Featured Pieces</h2>
          <div className="brand-divider"></div>
          
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="section-cta">
            <Link to="/shop" className="btn btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Join the Movement</h2>
          <p>
            No Modern Slave is more than a brand — it's a declaration of cultural independence. 
            Wear the statement. Live the liberation.
          </p>
          <Link to="/shop" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;