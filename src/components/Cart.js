import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import { FiTrash2, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';

const Cart = () => {
  const { items, totalAmount, clearCart } = useCart();

  const formatPrice = (price) => {
    return `R ${price.toLocaleString()}`;
  };

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">
          <FiShoppingBag />
        </div>
        <h2>Your cart is empty</h2>
        <p>No Modern Slave pieces are waiting for you. Start your liberation journey.</p>
        <Link to="/shop" className="btn btn-primary">
          Browse Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Bag ({items.length} items)</h1>
        <button className="btn-text" onClick={clearCart}>
          <FiTrash2 /> Clear All
        </button>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <CartItem key={`${item.id}-${item.size}`} item={item} />
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(totalAmount)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span className="shipping-free">Free</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total">
            <span>Total</span>
            <span>{formatPrice(totalAmount)}</span>
          </div>

          <Link to="/checkout" className="btn btn-primary btn-full">
            Proceed to Checkout
          </Link>
          
          <Link to="/shop" className="btn-text continue-shopping">
            <FiArrowLeft /> Continue Shopping
          </Link>

          <div className="cart-note">
            <p>✓ Free shipping on all orders</p>
            <p>✓ Secure checkout</p>
            <p>✓ 14-day returns</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;