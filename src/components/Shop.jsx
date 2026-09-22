import React from 'react';
import { NavLink } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';
import SEO from './SEO';

const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5896.599322239868'
  + '!2d-71.07291032407564!3d42.3574526352666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3'
  + '!1m2!1s0x89e3709ee3707099%3A0xe73da07f51a67fc2!2sCharles%20Street%20Supply!5e0!3m2'
  + '!1sen!2sus!4v1753281960789';

const ACE_URL = 'https://www.acehardware.com/';

const SHOP_DESCRIPTION = 'Shop online with Charles Street Supply. Order our exclusive zinc-plated '
  + 'plaster repair washers and kits directly online with nationwide shipping, or shop Ace Hardware.';

function Shop() {
  return (
    <div>
      <SEO
        title="Shop Online & Exclusive Plaster Washers | Charles Street Supply"
        description={SHOP_DESCRIPTION}
        canonicalUrl="https://www.charlesstsupply.com/shop"
      />

      <section className="header-section" id="shop-header">
        <Nav />
        <div className="header-text-container">
          <h1 className="header-text" id="shop-header-text">Shop</h1>
        </div>
      </section>

      <div id="shop-section">
        {/* Featured In-House Product: Plaster Washers */}
        <section id="shop-plaster-washers-featured">
          <div id="shop-plaster-washers-body">
            <div id="shop-plaster-washers-image-container">
              <img
                src="/plaster-washers.png"
                id="shop-plaster-washers-img"
                alt="Charles Street Supply Exclusive Plaster Repair Washers"
              />
            </div>
            <div id="shop-plaster-washers-text">
              <span className="featured-badge">Exclusive Flagship Product</span>
              <h2>Historic Plaster Washers & Repair Kits</h2>
              <p>
                Save your sagging plaster ceilings and cracked walls without the expense and dust of
                demolition. Made of durable zinc-plated steel, our plaster washers anchor loose plaster
                firmly back against the wood lath.
              </p>
              <div className="plaster-pricing-callout">
                <span>Packs starting at <strong>$24.00</strong> &bull; Complete repair kits from <strong>$29.00</strong></span>
                <span className="shipping-note">&bull; Direct nationwide shipping available</span>
              </div>
              <div id="shop-plaster-washers-buttons">
                <NavLink to="/plaster-washer-checkout" id="shop-plaster-buy-btn">
                  Buy Online Now
                </NavLink>
                <NavLink to="/plaster-washers" id="shop-plaster-learn-btn">
                  Learn How They Work
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* Ace Hardware Online Shopping */}
        <section id="shop-online">
          <div id="shop-online-body">
            <div id="shop-online-text">
              <h2>Shop Ace Hardware Online</h2>
              <br />
              <p>
                Get whatever you need delivered right to the store for pick-up – with free in-store delivery!
                Or just call us at 617-367-9046 and we&apos;ll order it for you, with no shipping or freight fees!
              </p>
              <br />
              <p>Be aware! The inventory listed on Ace Hardware is ONE DAY BEHIND. Come in and see us to see what we have in stock!</p>
              <br />
              <div id="shop-online-button-container">
                <a
                  href={ACE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" id="shop-online-button">Shop Ace Hardware</button>
                </a>
              </div>
            </div>
            <img src="/ace-logo.png" id="ace-logo" alt="Ace Hardware Logo" />
          </div>
        </section>

        {/* In-Store Visit */}
        <section id="shop-in-store">
          <div id="shop-in-store-text">
            <h2>Come visit us, we can help!</h2>
          </div>
          <div id="shop-in-store-map">
            <iframe
              src={MAP_EMBED_URL}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Charles Street Supply Map"
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
