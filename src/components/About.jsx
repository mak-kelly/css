import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function About() {
  return (
    <div>
      <section className="header-section" id="about-section-header">
        <Nav />
        <div className="header-text-container">
          <h1 className="header-text">About Us</h1>
        </div>
      </section>
      <section id="our-story-section">
        <div id="our-story-containter-1">
          <div className="our-story-text-container">
            <p>My dad, Dick Gurnon was a salesman and he called on a man who had just opened a tiny hardware store in a basement on Charles street. The year was 1948.
              After awhile Dick started to work part time and on weekends in the store and soon became partners in 1952.
              During the early 50&apos;s CSSC moved out of their tiny basement and moved to an expansive space of 1500 square feet at 43 Charles Street.
            </p>
            <p>
              All was well until 1963 when someone lit the trash on fire in the alley behind the store and the entire store was burned out and my dad&apos;s lease was cancelled.
            </p>
            <p>
              Spent the summer looking for a new location for the store.
              I had the responsibility of holding a fire sale (all the stuff that didn&apos;t burn & stuff the fire fighters didn&apos;t take) every weekend on our front lawn in Danvers.
            </p>
          </div>
          <div className="our-story-image-container">
            <img src="../src/img/our-story-image-1.png" alt="Original Charles Street Hardware Store" />
          </div>
        </div>
        <div id="our-story-containter-2">
          <div className="our-story-text-container-2">
            <p>
              On Labor Day 1963 we opened a new store at our present location at 54 Charles Street, with very limited inventory.
              We now have over 24,000 products.
            </p>
            <p>
              One long weekend in 1985 we knocked the wall down between us and the little fish market next door at 56 Charles street and increased our size to 2100 square feet on one floor!
              We were only closed for 2 days and reopened with a very dusty but larger store with two street numbers. (54 & 56) Sounds big doesn&apos;t it? People online don&apos;t know!
            </p>
            <p>
              I worked at the store when I was old enough to dust, and as soon as I could see over the counter and &quot;make change&quot; I would take the commuter rail into Boston from Danvers
              by myself (think of that in these times) after school and drive in with my dad on Saturdays.
            </p>
            <p>
              After graduation from UMass in 1977, I started working full time and shortly thereafter Norman came on board.
              We have had a cast of characters but no matter how many have worked at CSSC, they all feel part of the family.
            </p>
          </div>
          <div className="our-story-image-container">
            <img src="../src/img/our-story-image-2.png" alt="Charles Street in the 1960s" />
          </div>
        </div>
        <div id="jack-signature">
          <img src="../src/img/jack-gurnon-signature.png" alt="Jack Gurnon Signature" />
        </div>
        <div id="jack-behind-the-counter" />
      </section>
      <Footer />
    </div>
  );
}

export default About;
