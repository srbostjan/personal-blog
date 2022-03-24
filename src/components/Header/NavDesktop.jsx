import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import renderNav from './renderNav';

function NavDesktop({ nav }) {
  const twitter = 'https://twitter.com/srbostjan';
  const github = 'https://github.com/srbostjan';

  return (
    <ul className="nav-desktop">
      <li><Link to="/">Home</Link></li>
      {renderNav(nav)}
      <li><a href={twitter} target="_blank" rel="noreferrer">Twitter</a></li>
      <li><a href={github} target="_blank" rel="noreferrer">GitHub</a></li>
    </ul>
  );
}

NavDesktop.propTypes = {
  nav: PropTypes.string.isRequired,
};

export default NavDesktop;
