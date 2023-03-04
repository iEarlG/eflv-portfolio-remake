import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { images } from '../../constants';
import { navLinks } from '../../constants/data';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
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

      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                    >
                      <a href={`#${nav.id}`} onClick={() => setToggle(false)}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
      </div>
    </nav>
  )
}

export default Navbar;