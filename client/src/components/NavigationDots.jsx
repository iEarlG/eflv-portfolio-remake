import React from 'react';

import { navLinks } from '../constants/data';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navLinks.map((nav, i) => (
        <a
          key={nav.id + i}
          href={`#${nav.id}`}
          className="app__navigation-dot"
          style={active === nav.id ? {backgroundColor: '#0fac6a'} : {}}
        />
      ))}
    </div>
  )
}

export default NavigationDots;