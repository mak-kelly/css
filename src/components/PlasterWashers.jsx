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
            <NavLink id="buy-plaster-washers-button" to="/plaster-washer-checkout">Buy Now!</NavLink>
          </div>
        </div>
      </section>
      <section id="plaster-washers-overview">
        <div id="plaster-washers-overview-text">
          <h2>Why Plaster Washers?</h2>
          <br />
          <p>
            The historic homes we love and live in are defined by their beautiful plasterwork.
            Unlike modern drywall, real plaster offers unmatched acoustic properties, character,
            and decorative detail.
          </p>
          <br />
          <p>
            However, houses shift and settle over time, which causes old plaster to pull away
            from the underlying wood lath, leading to sagging and cracking. Charles Street Supply
            offers high-quality, zinc-plated steel plaster repair washers designed specifically to
            solve this problem. These durable zinc-plated steel plaster washers act as stabilizing
            anchors, holding the plaster securely back against the lath so you can patch and restore
            your walls and ceilings with ease.
          </p>
        </div>
        <div id="plaster-washers-overview-image">
          <img src="/plaster-washers.jpg" alt="Zinc-plated steel plaster repair washers by Charles Street Supply for historic plaster stabilization" />
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
        <NavLink id="buy-plaster-washers-button" to="/plaster-washer-checkout">Buy Now!</NavLink>
      </div>
      <Footer />
    </div>
  );
}

export default PlasterWashers;
