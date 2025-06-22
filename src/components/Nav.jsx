import React from 'react';
import { NavLink } from 'react-router';

function Nav(props) {
  return (
    <nav>
      <ul id="nav-links">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
        <li><NavLink to="/plaster-washers" className="nav-link">Plaster Washers</NavLink></li>
        <li><NavLink to="/about" className="nav-link">About</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
