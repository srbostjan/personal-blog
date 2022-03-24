import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import renderNav from './renderNav';

function HeaderMobile({ name, nav }) {
  const twitter = 'https://twitter.com/srbostjan';
  const github = 'https://github.com/srbostjan';

  return (
    <header className="header-mobile">
      <h1 className="header__title">{name}</h1>
      <nav>
        <input type="checkbox" name="" id="nav__checkbox" className="nav__checkbox" />
        <label htmlFor="nav__checkbox" className="nav__toggle">
          <i className="fas fa-bars menu" />
          <i className="fas fa-times close" />
          <input type="checkbox" name="" id="nav__checkbox" className="nav__checkbox" />
        </label>
        <ul className="nav__menu">
          <li><Link to="/">Home</Link></li>
          {renderNav(nav)}
          <li><a href={twitter} target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href={github} target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </nav>
    </header>
  );
}

HeaderMobile.propTypes = {
  name: PropTypes.string.isRequired,
  nav: PropTypes.string.isRequired,
};

export default HeaderMobile;
