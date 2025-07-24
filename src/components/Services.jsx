import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function Services() {
  return (
    <div>
      <section className="header-section" id="services-section-header">
        <Nav />
        <div className="header-text-container">
          <h1 className="header-text" id="services-header-text">Our Services</h1>
        </div>
      </section>
      <section id="services-overview">
        <div id="delivery-details">
          <h2>Delivery</h2>
          <div id="delivery-details-text">
            <p>We offer delivery service to Back Bay, Beacon Hill, West End,
              North End, waterfront and Cambridge. Delivery fee may apply, please call for details. We&apos;re also known to deliver to Cape Cod in return for a weekend stay...
            </p>
            <br />
            <p>We offer delivery from Monday through Saturday, from 9:30 AM to 5:30 PM, scheduled within two hour time slots.
              Order online by 12:00 midnight for next-day delivery, or at the store by 5:00 PM on the previous day.
            </p>
          </div>
        </div>
        <div id="services-details">
          <h2>At Your Service...</h2>
          <div id="services-details-text">
            <p>We&apos;ll build a gas grill, repair windows and screens, install air conditioners, get cats out of dryer vents, provide locksmithing service, and more.
              Call us at 617-367-9046 or visit the store to find out how we can help you!
            </p>
            <br />
            <p>We also can recommend experienced professionals for all of your projects.
              Give us a call and ask about our references!
            </p>
          </div>
        </div>
      </section>
      <section id="more-services-section">
        <h2 id="more-services-header">More Services</h2>
        <div id="more-services-tabs">
          <div className="service-tab" id="gift-cards">Ace Gift Cards</div>
          <div className="service-tab" id="blind-cutting">Blind Cutting</div>
          <div className="service-tab" id="catalog-sales">Catalog Sales</div>
          <div className="service-tab" id="delivery">Delivery</div>
          <div className="service-tab" id="design-service">Design Service</div>
        </div>
        <div id="more-services-tabs">
          <div className="service-tab" id="glass-cutting">Glass Cutting</div>
          <div className="service-tab" id="in-house-handyman">In House Handyman</div>
          <div className="service-tab" id="key-cutting">Key Cutting</div>
          <div className="service-tab" id="knife-sharpening">Knife Sharpening</div>
          <div className="service-tab" id="lamp-repair">Lamp Repair</div>
        </div>
        <div id="more-services-tabs">
          <div className="service-tab" id="lock-servicing">Lock Servicing</div>
          <div className="service-tab" id="paint-color-matching">Paint Color Matching</div>
          <div className="service-tab" id="referrals">Referrals</div>
          <div className="service-tab" id="rental">Rental</div>
          <div className="service-tab" id="rug-shampoo-rental">Rug Shampoo Rental</div>
        </div>
        <div id="more-services-tabs">
          <div className="service-tab" id="screen-repair">Screen Repair</div>
          <div className="service-tab" id="se-habla-espanol">Se Habla Espanol</div>
          <div className="service-tab" id="shade-cutting">Shade Cutting</div>
          <div className="service-tab" id="shipping-service">Shipping Service</div>
          <div className="service-tab" id="window-repair">Window Repair</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Services;
