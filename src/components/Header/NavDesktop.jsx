import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavDesktop({ nav }) {
  function renderNav() {
    if (nav === 'articles') {
      return (
        <>
          <li><Link to="/biography">Biography</Link></li>
          <li className="active"><Link to="/articles">Articles</Link></li>
        </>
      );
    } if (nav === 'biography') {
      return (
        <>
          <li className="active"><Link to="/biography">Biography</Link></li>
          <li><Link to="/articles">Articles</Link></li>
        </>
      );
    }
    return (
      <>
        <li><Link to="/biography">Biography</Link></li>
        <li><Link to="/articles">Articles</Link></li>
      </>
    );
  }
  return (
    <ul className="nav-desktop">
      <li><Link to="/">Home</Link></li>
      {renderNav()}
      <li><a href="https://twitter.com/srbostjan" target="_blank" rel="noreferrer">Twitter</a></li>
      <li><a href="https://github.com/srbostjan" target="_blank" rel="noreferrer">GitHub</a></li>
    </ul>
  );
}

NavDesktop.propTypes = {
  nav: PropTypes.string.isRequired,
};

export default NavDesktop;
