import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FiCheck, FiArrowLeft, FiLock } from 'react-icons/fi';

const Checkout = () => {
  const { items, totalAmount, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    country: 'South Africa',
  });

  const formatPrice = (price) => {
    return `R ${price.toLocaleString()}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // Simulate order placement
      setOrderPlaced(true);
      clearCart();
    }
  };

  if (orderPlaced) {
    return (
      <div className="order-confirmation">
        <div className="confirmation-icon">
          <FiCheck />
        </div>
        <h1>Order Confirmed!</h1>
        <p className="confirmation-number">Order #NMS-{Date.now().toString().slice(-8)}</p>
        <p>
          Thank you for supporting the No Modern Slave movement. Your pieces will be 
          crafted with care and shipped within 3-5 business days.
        </p>
        <p className="confirmation-message">
          A confirmation email has been sent to <strong>{formData.email}</strong>
        </p>
        <div className="confirmation-actions">
          <Link to="/" className="btn btn-primary">
            Return Home
          </Link>
          <Link to="/shop" className="btn btn-outline">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <div className="checkout-steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <span className="step-number">1</span>
            <span className="step-label">Shipping</span>
          </div>
          <div className="step-line"></div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <span className="step-number">2</span>
            <span className="step-label">Payment</span>
          </div>
        </div>
      </div>

      <div className="checkout-layout">
        <form onSubmit={handleSubmit} className="checkout-form">
          {step === 1 && (
            <div className="form-section">
              <h2>Shipping Information</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="province">Province *</label>
                  <select
                    id="province"
                    name="province"
                    required
                    value={formData.province}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Province</option>
                    <option value="Gauteng">Gauteng</option>
                    <option value="Western Cape">Western Cape</option>
                    <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                    <option value="Eastern Cape">Eastern Cape</option>
                    <option value="Free State">Free State</option>
                    <option value="Limpopo">Limpopo</option>
                    <option value="Mpumalanga">Mpumalanga</option>
                    <option value="North West">North West</option>
                    <option value="Northern Cape">Northern Cape</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="postalCode">Postal Code *</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Continue to Payment
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="form-section">
              <h2>Payment Details</h2>
              
              <div className="payment-methods">
                <label className="payment-option">
                  <input type="radio" name="payment" defaultChecked />
                  <span className="payment-label">Credit / Debit Card</span>
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="cardNumber">Card Number *</label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiry">Expiry Date *</label>
                  <input type="text" id="expiry" placeholder="MM/YY" required />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV *</label>
                  <input type="text" id="cvv" placeholder="123" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="cardName">Name on Card *</label>
                <input type="text" id="cardName" required />
              </div>

              <div className="secure-checkout">
                <FiLock /> Your payment information is secure and encrypted
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Place Order — {formatPrice(totalAmount)}
              </button>
              
              <button
                type="button"
                className="btn-text"
                onClick={() => setStep(1)}
              >
                <FiArrowLeft /> Back to Shipping
              </button>
            </div>
          )}
        </form>

        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <div className="checkout-items">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="checkout-item">
                <div className="checkout-item-image">
                  <img src={item.images[0]} alt={item.name} />
                  <span className="item-quantity">{item.quantity}</span>
                </div>
                <div className="checkout-item-details">
                  <p className="checkout-item-name">{item.name}</p>
                  <p className="checkout-item-size">Size: {item.size}</p>
                </div>
                <p className="checkout-item-price">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          <div className="summary-divider"></div>
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
        </div>
      </div>
    </div>
  );
};

export default Checkout;