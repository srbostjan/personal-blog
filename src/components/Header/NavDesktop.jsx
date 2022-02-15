import React from 'react';
import { Link } from 'react-router-dom';

const NavDesktop = () => {
  return (
    <ul className='nav-desktop'>
      <li><Link to='/'>Home</Link></li>
      {/* <li><Link to='/biography'>Biography</Link></li> */}
      <li><Link to='/articles'>Articles</Link></li>
      <li><a href='https://twitter.com/srbostjan' target='_blank' rel="noreferrer">Twitter</a></li>
      <li><a href='https://github.com/srbostjan' target='_blank' rel="noreferrer" >GitHub</a></li>
    </ul>
  );
};

export default NavDesktop;