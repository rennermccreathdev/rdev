import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/bio'>bio</Link></li>
        <li><Link to='/portfolio'>portfolio</Link></li>
        <li><Link to='/contact'>contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;