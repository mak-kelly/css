import React, { useState } from 'react';
import { NavLink } from 'react-router';
import {
  ChevronDown, CheckCircle2, Wrench, ShieldCheck, Truck,
} from 'lucide-react';
import Nav from './Nav';
import Footer from './Footer';
import SEO from './SEO';

const faqData = [
  {
    q: 'How many plaster washers do I need for my repair?',
    a: 'As a rule of thumb, space washers every 4 to 6 inches along cracks or in a loose grid '
      + 'across sagging ceiling sections. For small wall cracks, 10 to 20 washers are usually sufficient. '
      + 'For larger rooms or sagging ceilings, our 175-piece or 250-piece repair kits (or bulk packs of 500 '
      + 'to 1,000 washers) provide ample supply for full stabilization.',
  },
  {
    q: 'What size and type of screws should I use?',
    a: 'We recommend standard #6 or #8 drywall or wood screws, typically 1-5/8" to 2" long, '
      + 'depending on the thickness of your plaster and lath. If you prefer a complete solution, our 90, '
      + '175, and 250-piece Plaster Washer Repair Kits include pre-matched rust-proof screws and a magnetic driver bit.',
  },
  {
    q: 'Can plaster washers be used on ceilings as well as walls?',
    a: 'Yes, absolutely! Sagging ceilings are one of the most common applications for plaster washers '
      + '(often called ceiling buttons). The wide surface area holds heavy plaster firmly against ceiling joists '
      + 'and lath without pulling through the plaster.',
  },
  {
    q: 'Can you paint or plaster directly over the washers?',
    a: 'Yes! The unique perforated design allows spackle, joint compound, or plaster to push through '
      + 'the holes and "key" directly to the surface. Apply 1 to 2 thin coats of compound feathered smoothly '
      + 'over the washers, let dry, sand flush, and prime/paint for an invisible repair.',
  },
  {
    q: 'Why use plaster washers instead of tearing down plaster for drywall?',
    a: 'Real plaster offers superior acoustic insulation, natural fire resistance, and historic charm '
      + 'that drywall cannot duplicate. Tearing down historic plaster creates huge clouds of dust, risks '
      + 'structural trim, and costs thousands of dollars. Plaster washers permanently stabilize the original '
      + 'plaster at a tiny fraction of the cost and mess.',
  },
  {
    q: 'Do you ship plaster washers outside of Boston?',
    a: 'Yes! We ship our plaster washers and complete repair kits nationwide across the United States. '
      + 'Orders are processed promptly and shipped directly to your door.',
  },
];

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HowTo',
      name: 'How to Repair Sagging or Cracked Historic Plaster with Plaster Washers',
      description: 'Step-by-step guide to re-securing sagging plaster ceilings and cracked walls to wood lath using zinc-plated steel plaster washers.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Assess & Locate Lath',
          text: 'Locate the sagging plaster or crack where the plaster has pulled away from the wood lath behind it. Gently press to confirm flexibility.',
        },
        {
          '@type': 'HowToStep',
          name: 'Position Plaster Washers',
          text: 'Position washers 4 to 6 inches apart along both sides of cracks or across sagging ceiling sections.',
        },
        {
          '@type': 'HowToStep',
          name: 'Fasten with Screws',
          text: 'Drive a drywall screw through the washer into the wood lath until the washer slightly depresses flush into the plaster.',
        },
        {
          '@type': 'HowToStep',
          name: 'Feather Joint Compound and Paint',
          text: 'Apply joint compound or spackle across the perforated washer face so compound keys into the holes. Sand flush and paint.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqData.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
  ],
};

function PlasterWashers() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div>
      <SEO
        title="Plaster Washers & Historic Plaster Repair Kits | Charles Street Supply"
        description="Shop zinc-plated steel plaster repair washers and complete repair kits online. Easily anchor sagging plaster walls and ceilings back to wood lath. Nationwide shipping."
        canonicalUrl="https://www.charlesstsupply.com/plaster-washers"
        structuredData={schemaData}
      />

      <section className="header-section" id="plaster-washers-header">
        <Nav />
        <div className="header-text-container">
          <h1 className="header-text" id="plaster-washers-header-text">Plaster Washers & Repair Kits</h1>
          <p className="header-subtext">The Proven Way to Save Historic Plaster Walls & Ceilings</p>
          <br />
          <div className="call-to-buy-plaster-washers">
            <NavLink id="buy-plaster-washers-button" to="/plaster-washer-checkout">Buy Now Online</NavLink>
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section id="plaster-washers-benefits-bar">
        <div className="benefit-item">
          <ShieldCheck className="benefit-icon" size={24} />
          <span>Durable Zinc-Plated Steel</span>
        </div>
        <div className="benefit-item">
          <Truck className="benefit-icon" size={24} />
          <span>Nationwide Shipping Available</span>
        </div>
        <div className="benefit-item">
          <Wrench className="benefit-icon" size={24} />
          <span>Complete Kits with Screws & Bits</span>
        </div>
        <div className="benefit-item">
          <CheckCircle2 className="benefit-icon" size={24} />
          <span>Trusted by Restorers Since 1948</span>
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
            from the underlying wood lath, leading to sagging, bulges, and cracking. Charles Street Supply
            offers high-quality, zinc-plated steel plaster repair washers designed specifically to
            solve this problem.
          </p>
          <br />
          <p>
            These durable plaster washers (also known as <strong>ceiling buttons</strong> or <strong>lath anchors</strong>)
            act as stabilizing anchors, clamping the loose plaster securely back against the wood lath so you can patch
            and restore your walls and ceilings without the mess, expense, and destruction of tearing down historic plaster.
          </p>
        </div>
        <div id="plaster-washers-overview-image">
          <img src="/plaster-washers.jpg" alt="Zinc-plated steel plaster repair washers by Charles Street Supply for historic plaster stabilization" />
        </div>
      </section>

      {/* 4-Step How-To Guide */}
      <section id="plaster-washers-steps-section">
        <div className="steps-header">
          <h2>How to Repair Historic Plaster in 4 Easy Steps</h2>
          <p>Stabilize sagging ceilings and wall cracks yourself with simple hand tools</p>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Assess & Locate Lath</h3>
            <p>
              Tap gently along the crack or sagging ceiling to find where plaster has pulled away from the wood lath behind it.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Position Washers</h3>
            <p>
              Space plaster washers 4 to 6 inches apart along both sides of cracks or in a grid across sagging ceiling areas.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Fasten Securely</h3>
            <p>
              Drive a 1-5/8&quot; drywall screw through the center hole into the wood lath until the washer gently pulls the plaster tight and flush.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Patch & Paint</h3>
            <p>
              Trowel joint compound or spackle directly over the washers. The perforated holes lock the compound in place. Sand flush and paint!
            </p>
          </div>
        </div>
      </section>

      {/* Video Demonstration */}
      <section id="plaster-washers-how-to-use">
        <div id="plaster-washers-use-text">
          <h2>Watch It in Action</h2>
          <br />
          <p>
            Plaster repair is easy, even for a first-time DIYer, with a few simple tools,
            materials—and Charles Street Supply&apos;s exclusive plaster washers!
          </p>
          <br />
          <p>
            Plaster washers are about the size of a quarter and cost pennies.
            The unique design of the plaster washers anchors the plaster firmly against the lath, stopping cracks and sagging permanently.
          </p>
        </div>
        <div id="plaster-washers-use-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gJqzFDbanwI?si=gGMiqOr20vWCJ23J"
            title="How to use plaster washers repair video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="plaster-washers-faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about purchasing and using plaster washers</p>
        </div>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div
              key={item.q}
              className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}
            >
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaqIndex === index}
              >
                <span>{item.q}</span>
                <ChevronDown className={`faq-chevron ${openFaqIndex === index ? 'rotated' : ''}`} size={20} />
              </button>
              {openFaqIndex === index && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section id="plaster-washers-cta-banner">
        <h2>Ready to Restore Your Historic Plaster?</h2>
        <p>Available in convenient packs of 10 dozen up to 10,000 count, as well as complete all-in-one repair kits.</p>
        <div className="call-to-buy-plaster-washers">
          <NavLink id="buy-plaster-washers-button" to="/plaster-washer-checkout">Order Plaster Washers Online</NavLink>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PlasterWashers;
