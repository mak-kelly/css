import React, { useEffect, useRef } from 'react';

function Footer() {
  const scooterRef = useRef(null);

  useEffect(() => {
    if (scooterRef.current) {
      scooterRef.current.classList.add('scooter-animate');
    }
  }, []);

  return (
    <div>
      <section id="footer-section">
        <div id="contact-us">
          <h2>Contact Us!</h2>
          <a href="tel:1-800-382-4360">TOLL-FREE: 1-800-382-4360</a>
          <br />
          <a href="tel:617-367-9046">Local: 617-367-9046</a>
          <p>Email: <a href="mailto:info@cssc.com">info@cssc.com</a></p>
          <p>Address:
            <a href="https://maps.app.goo.gl/Mad6wuUkUzwd5c2U7">
              54 Charles St, Boston, MA 02114
            </a>
          </p>
        </div>
        <div id="hours">
          <h2>Hours</h2>
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 5:00 PM</p>
          <p>Sunday: 11:00 AM - 4:00 PM</p>
        </div>
      </section>
      <section id="footer-bottom">
        <img src="/footer.png" alt="Drawing of Charles Street Supply Storefront" />
        <img
          ref={scooterRef}
          id="scooter"
          src="/scooter.png"
          alt="Drawing of Jack Gurnon's daughters on a vespa scooter"
        />
      </section>
    </div>
  );
}

export default Footer;
