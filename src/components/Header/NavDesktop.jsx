import React from 'react';
import { Link } from 'react-router-dom';

const NavDesktop = () => {
  return (
    <ul className='nav-desktop'>
      <li><Link to='/'>Home</Link></li>
      {/* <li><Link to='/biography'>Biography</Link></li> */}
      <li><Link to='/articles'>Articles</Link></li>
      <li><Link to='#'>Twitter</Link></li>
      <li><Link to='#'>GitHub</Link></li>
    </ul>
  );
};

export default NavDesktop;