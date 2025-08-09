import React from 'react';
import { NavLink } from 'react-router';

function Nav(props) {
  return (
    <nav id="nav-container">
      <ul id="nav-links">
        <li><NavLink to="/plaster-washers" className="nav-link" id="nav-link-plaster-washers">Plaster Washers</NavLink></li>
        <li><NavLink to="/services" className="nav-link" id="nav-link-services">Services</NavLink></li>
        <li><NavLink to="/shop" className="nav-link" id="nav-link-shop">Shop</NavLink></li>
        <li><NavLink to="/about" className="nav-link" id="nav-link-about">About</NavLink></li>
        <li><NavLink to="tel:1-800-382-4360" className="nav-link" id="nav-link-phone-number">+1-800-382-4360</NavLink></li>
      </ul>
      <NavLink to="/" id="logo-link"><img id="logo" alt="logo" src="/logo.png" /></NavLink>
    </nav>
  );
}

export default Nav;
