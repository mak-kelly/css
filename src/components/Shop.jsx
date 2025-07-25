import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function Shop() {
  return (
    <div>
      <section className="header-section" id="shop-header">
        <Nav />
        <div className="header-text-container">
          <h1 className="header-text">Shop</h1>
        </div>
      </section>
      <div id="shop-section">
        <section id="shop-online">
          <div id="shop-online-body">
            <div id="shop-online-text">
              <h2>Shop Online</h2>
              <br />
              <p>
                Get whatever you need delivered right to the store for pick-up –  with free in-store delivery!
                Or just call us at 617-367-9046 and we&apos;ll order it for you,  with no shipping or freight fees!
              </p>
              <br />
              <div id="shop-online-button-container">
                <a
                  href="https://www.acehardware.com/?utm_source=google&utm_medium=cpc&gclsrc=aw.ds&gad_source=1&gad_campaignid=21521805025&gbraid=0AAAAADtqLJGQa910usipopDK2HwqjA2p7&gclid=Cj0KCQ
              // jwkILEBhDeARIsAL--pjzbIZ8udl86O8FAGiYByPeCpKBS1V6066GN7qqU-a0uXsKuMj1w3KUaAmJ9EALw_wcB"
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
        <section id="shop-in-store">
          <div id="shop-in-store-text">
            <h2>Come visit us, we can help!</h2>
          </div>
          <div id="shop-in-store-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5896.599322239868!2d-71.07291032407564!3d42.3574526352666!2m3!1f0!2f0!3f0!3m
              // 2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3709ee3707099%3A0xe73da07f51a67fc2!2sCharles%20Street%20Supply!5e0!3m2!1sen!2sus!4v1753281960789!5m2!1sen!2sus"
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
