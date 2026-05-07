import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FiShoppingBag, FiCheck, FiInfo } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [showDetails, setShowDetails] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedSize);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const formatPrice = (price) => {
    return `R ${price.toLocaleString()}`;
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.images[0]} alt={product.name} className="product-image" />
        {product.featured && <span className="product-badge">Featured</span>}
        {product.collection === 'Limited Edition' && (
          <span className="product-badge badge-limited">Limited</span>
        )}
        <div className="product-hover-actions">
          <button 
            className="quick-view-btn"
            onClick={() => setShowDetails(!showDetails)}
          >
            <FiInfo /> Quick View
          </button>
        </div>
      </div>

      <div className="product-info">
        <p className="product-collection">{product.collection} Collection</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
        
        <div className="product-sizes">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`size-option ${selectedSize === size ? 'selected' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedSize(size);
              }}
            >
              {size}
            </button>
          ))}
        </div>

        <button
          className={`btn btn-add-cart ${addedToCart ? 'added' : ''}`}
          onClick={handleAddToCart}
        >
          {addedToCart ? (
            <>
              <FiCheck /> Added to Bag
            </>
          ) : (
            <>
              <FiShoppingBag /> Add to Cart
            </>
          )}
        </button>

        {showDetails && (
          <div className="product-quick-details">
            <p>{product.description}</p>
            <div className="product-details-list">
              <p><strong>Details:</strong> {product.details}</p>
              <p><strong>Colors:</strong> {product.colors.join(', ')}</p>
            </div>
            <Link to={`/shop`} className="view-full-details">
              View Full Details →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;