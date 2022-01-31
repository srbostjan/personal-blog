import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <Link to='/' className='header-left--name'>Sebas Rivera</Link>
      </div>
      <nav>
        <ul className='nav'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/biography'>Biography</Link></li>
          <li><Link to='/articles'>Articles</Link></li>
          <li>
            <a target='_blank' rel='noreferrer noopener' href='https://twitter.com/srbostjan' >@bostjan_sebas</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header