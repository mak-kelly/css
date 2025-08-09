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
      <div id="footer-containter">
        <section id="footer-section">
          <div id="contact-us">
            <h2 id="contact-us-header">Contact Us!</h2>
            <div id="contact-us-text">
              <a href="tel:1-800-382-4360">TOLL-FREE: 1-800-382-4360</a>
              <a href="tel:617-367-9046">Local: 617-367-9046</a>
              <p>Email: <a href="mailto:info@cssc.com">info@cssc.com</a></p>
              <p>Address:&nbsp;
                <a href="https://maps.app.goo.gl/Mad6wuUkUzwd5c2U7">
                  54 Charles St, Boston, MA 02114
                </a>
              </p>
            </div>
          </div>
          <div id="hours">
            <h2 id="hours-header">Hours</h2>
            <div id="hours-text">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 5:00 PM</p>
              <p>Sunday: 11:00 AM - 4:00 PM</p>
            </div>
          </div>
        </section>
      </div>
      <section id="footer-bottom">
        <img id="footer-image" src="/footer.png" alt="Drawing of Charles Street Supply Storefront" />
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
