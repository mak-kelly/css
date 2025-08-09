import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function CheckoutSuccess() {
  return (
    <div>
      <section className="header-section" id="checkout-success-header">
        <Nav />
        <div className="header-text-container">
          <h1 className="header-text" id="checkout-success-header-text">Thanks for your order!</h1>
        </div>
      </section>
      <section id="checkout-success-section">
        <h2>Your order has been placed.</h2>
        <br />
        <p>Please check your email for a receipt from Stripe.</p>
        <p>If you have any questions, please call us at 617-367-9046.</p>
      </section>
      <Footer />
    </div>
  );
}

export default CheckoutSuccess;
