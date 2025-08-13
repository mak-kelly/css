import React, { useState } from 'react';
import { NavLink } from 'react-router';

function Nav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav id="nav-container">
      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <ul id="nav-links">
          <li><NavLink to="/" className="nav-link" id="nav-link-home" /></li>
          <li><NavLink to="/plaster-washers" className="nav-link" id="nav-link-plaster-washers">Plaster Washers</NavLink></li>
          <li><NavLink to="/services" className="nav-link" id="nav-link-services">Services</NavLink></li>
          <li><NavLink to="/shop" className="nav-link" id="nav-link-shop">Shop</NavLink></li>
          <li><NavLink to="/about" className="nav-link" id="nav-link-about">About</NavLink></li>
          <li><NavLink to="tel:1-800-382-4360" className="nav-link" id="nav-link-phone-number">+1-800-382-4360</NavLink></li>
        </ul>
        <NavLink to="/" id="logo-link"><img id="logo" alt="logo" src="/logo.png" /></NavLink>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <NavLink to="/" id="mobile-logo-link"><img id="mobile-logo" alt="logo" src="/logo.png" /></NavLink>

        <button
          type="button"
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <ul className={`mobile-nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" className="mobile-nav-link" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/plaster-washers" className="mobile-nav-link" onClick={closeMenu}>Plaster Washers</NavLink></li>
          <li><NavLink to="/services" className="mobile-nav-link" onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/shop" className="mobile-nav-link" onClick={closeMenu}>Shop</NavLink></li>
          <li><NavLink to="/about" className="mobile-nav-link" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="tel:1-800-382-4360" className="mobile-nav-link" onClick={closeMenu}>+1-800-382-4360</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
