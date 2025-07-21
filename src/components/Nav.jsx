import React from 'react';
import { NavLink } from 'react-router';

function Nav(props) {
  return (
    <nav>
      <ul id="nav-links">
        <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
        <li><NavLink to="/plaster-washers" className="nav-link">Plaster Washers</NavLink></li>
        <li><img id="logo" alt="logo" src="../src/img/logo.png" /></li>
        <li><NavLink to="/about" className="nav-link">About</NavLink></li>
        <li><NavLink>+1-800-382-4360</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
