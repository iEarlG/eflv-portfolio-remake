import React from 'react';

import { images } from '../../constants';
import { navLinks } from '../../constants/data';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.EAVLogo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((nav) => (
          <li
            key={`link-${nav.id}`}
            className="app__flex p-text"
          >
            <div></div>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;