import React from 'react';
import { NavLink } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <section className="header-section" id="home-section-header">
        <Nav />
        <div className="header-text-container">
          <h1 className="header-text" id="home-header-text">Charles Street Supply</h1>
          <br />
          <h1 id="home-header-text-2">Boston&apos;s Oldest Hardware Store</h1>
        </div>
      </section>
      <section id="featured-brands">
        <h2 id="featured-brands-header">Featured Brands</h2>
        <ul id="featured-brands-list">
          <li id="yeti" />
          <li id="weber" />
          <li id="ben-moore" />
          <li id="miele" />
          <li id="leatherman" />
        </ul>
      </section>
      <div id="homepage-plaster-washer-container">
        <section id="homepage-plaster-washers">
          <div id="homepage-plaster-washers-text">
            <h2>Plaster Washers</h2>
            <br />
            <p>With the few simple tools, repair plaster with Charles Street Supply’s exclusive plaster washers.</p>
            <br />
            <div id="homepage-plaster-washers-text-buttons">
              <NavLink id="homepage-plaster-washers-text-buttons-learn-more" to="/plaster-washers">Learn More</NavLink>
              <NavLink id="homepage-plaster-washers-text-buttons-buy-now" to="/plaster-washer-checkout">Buy Now</NavLink>
            </div>
          </div>
          <div id="homepage-plaster-washers-image">
            <img id="homepage-plaster-washers-image-img" src="/plaster-washers.png" alt="Plaster Washers" />
          </div>
        </section>
      </div>
      <section id="come-visit-us">
        <div id="come-visit-us-text">
          <h2>Family owned and operated since 1948.</h2>
          <p>Come visit us at 54 Charles Street in Boston&apos;s historic Beacon Hill neighborhood!</p>
        </div>
        <div id="come-visit-us-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5896.599322239868!2d-71.07291032407564!3d42.3574526352666!2m3!1f0!2f0!3f0!3m2!1i1024!
            // 2i768!4f13.1!3m3!1m2!1s0x89e3709ee3707099%3A0xe73da07f51a67fc2!2sCharles%20Street%20Supply!5e0!3m2!1sen!2sus!4v1753974327783!5m2!1sen!2sus"
            width="70%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Charles Street Supply Map"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
