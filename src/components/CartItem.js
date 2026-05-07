import React from 'react';
import { useCart } from '../context/CartContext';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const formatPrice = (price) => {
    return `R ${price.toLocaleString()}`;
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.images[0]} alt={item.name} />
      </div>
      
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="cart-item-size">Size: {item.size}</p>
        <p className="cart-item-collection">{item.collection} Collection</p>
        
        <div className="cart-item-controls">
          <div className="quantity-control">
            <button
              onClick={() => updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))}
              disabled={item.quantity <= 1}
            >
              <FiMinus />
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
            >
              <FiPlus />
            </button>
          </div>
          
          <button
            className="btn-text remove-btn"
            onClick={() => removeFromCart(item.id, item.size)}
          >
            <FiTrash2 /> Remove
          </button>
        </div>
      </div>
      
      <div className="cart-item-price">
        <p className="price-per-item">{formatPrice(item.price)}</p>
        <p className="price-total">{formatPrice(item.price * item.quantity)}</p>
      </div>
    </div>
  );
};

export default CartItem;