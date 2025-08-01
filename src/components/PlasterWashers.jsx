import React from 'react';
import { NavLink } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';

function PlasterWashers() {
  return (
    <div>
      <section className="header-section" id="plaster-washers-header">
        <Nav />
        <div className="header-text-container">
          <h1 className="header-text" id="plaster-washers-header-text">Plaster Washers</h1>
          <br />
          <div className="call-to-buy-plaster-washers">
            <button id="buy-plaster-washers-button" type="button">Buy Now</button>
            <NavLink to="/plaster-washer-checkout">Checkout</NavLink>
          </div>
        </div>
      </section>
      <section id="plaster-washers-overview">
        <div id="plaster-washers-overview-text">
          <h2>Why Plaster Washers?</h2>
          <br />
          <p>
            The old houses we love and live in are almost all distinguished by the pervasive use of plasterwork. Real plaster has a look, feel,
            acoustic properties and often rich decorative detail that just can&apos;t be copied by its modern cost cutting substitute--paper-faced, gypsum-filled wallboard, or drywall.
          </p>
          <br />
          <p>
            Houses move and breathe, however, much like humans, and over time can develop cracks in the walls and ceilings.
            In these areas, the layers of plaster are pulling away from the underlying strips of wood lath which support it.
          </p>
        </div>
        <div id="plaster-washers-overview-image">
          <img src="/plaster-washers.jpg" alt="Plaster Washers" />
        </div>
      </section>
      <section id="plaster-washers-how-to-use">
        <div id="plaster-washers-use-text">
          <h2>How do they work?</h2>
          <br />
          <p>
            Plaster work is easy to repair, even for the novice, with the a few simple tools, materials--and Charles Street Supply&apos;s exclusive plaster washers!
          </p>
          <br />
          <p>
            Plaster washers are about the size of a quarter and cost pennies.
            A drywall screw goes through the washer and is driven into the wood lath behind the plaster.
            The unique design of the plaster washers anchors the plaster firmly against the lath, stopping cracks and sagging.
          </p>
        </div>
        <div id="plaster-washers-use-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gJqzFDbanwI?si=gGMiqOr20vWCJ23J"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
      <div className="call-to-buy-plaster-washers">
        <button id="buy-plaster-washers-button" type="button" onClick={() => { window.location.href = '/plaster-washer-checkout'; }}>Buy Now</button>
      </div>
      <Footer />
    </div>
  );
}

export default PlasterWashers;
