import React from 'react';
import { NavLink } from 'react-router';

function Nav(props) {
  return (
    <nav>
      <ul id="nav-links">
        <li><NavLink to="/plaster-washers" className="nav-link">Plaster Washers</NavLink></li>
        <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
        <li><NavLink to="/shop" className="nav-link">Shop</NavLink></li>
        <li><NavLink to="/about" className="nav-link">About</NavLink></li>
        <li><NavLink to="tel:1-800-382-4360" className="nav-link">+1-800-382-4360</NavLink></li>
      </ul>
      <NavLink to="/" id="logo-link"><img id="logo" alt="logo" src="../src/img/logo.png" /></NavLink>
    </nav>
  );
}

export default Nav;
