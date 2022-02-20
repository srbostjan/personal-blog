import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderMobile = ({ name, nav }) => (
  <header className='header-mobile'>
    <h1 className='header__title'>{name}</h1>
    <nav>
      <input type='checkbox' name='' id='nav__checkbox' className='nav__checkbox' />
      <label htmlFor='nav__checkbox' className='nav__toggle'>
        <i className='fas fa-bars menu'></i>
        <i className='fas fa-times close'></i>
      </label>
      <ul className="nav__menu">
        <li><Link to='/'>Home</Link></li>
        {nav === 'articles' ?
          <>
            <li><Link to='/biography'>Biography</Link></li>
            <li className='active'><Link to='/articles'>Articles</Link></li>
          </> :
          nav === 'biography' ?
            <>
              <li className='active'><Link to='/biography'>Biography</Link></li>
              <li><Link to='/articles'>Articles</Link></li>
            </> :
            <>
              <li><Link to='/biography'>Biography</Link></li>
              <li><Link to='/articles'>Articles</Link></li>
            </>}
        <li><a href='https://twitter.com/srbostjan' target='_blank' rel="noreferrer">Twitter</a></li>
        <li><a href='https://github.com/srbostjan' target='_blank' rel="noreferrer">GitHub</a></li>
      </ul>
    </nav>
  </header>
);

HeaderMobile.propTypes = {
  name: PropTypes.string.isRequired,
  nav: PropTypes.string.isRequired
};

export default HeaderMobile;