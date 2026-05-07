import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products, { categories, collections } from '../data/products';
import { FiFilter, FiX } from 'react-icons/fi';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCollection, setSelectedCollection] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products
    .filter((p) => selectedCategory === 'All' || p.category === selectedCategory)
    .filter((p) => selectedCollection === 'All' || p.collection === selectedCollection)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0; // featured
    });

  return (
    <div className="shop-page">
      <div className="shop-hero">
        <h1>The Collection</h1>
        <p>Afrocentric fashion with purpose. Each piece tells a story.</p>
      </div>

      <div className="shop-container">
        <button
          className="filter-toggle"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? <FiX /> : <FiFilter />}
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        <div className={`shop-filters ${showFilters ? 'visible' : ''}`}>
          <div className="filter-section">
            <h3>Category</h3>
            <div className="filter-options">
              <button
                className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('All')}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Collection</h3>
            <div className="filter-options">
              <button
                className={`filter-btn ${selectedCollection === 'All' ? 'active' : ''}`}
                onClick={() => setSelectedCollection('All')}
              >
                All
              </button>
              {collections.map((col) => (
                <button
                  key={col}
                  className={`filter-btn ${selectedCollection === col ? 'active' : ''}`}
                  onClick={() => setSelectedCollection(col)}
                >
                  {col}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Sort By</h3>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>
        </div>

        <div className="shop-products">
          <p className="results-count">{filteredProducts.length} products</p>
          
          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <h3>No products match your filters</h3>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedCollection('All');
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;