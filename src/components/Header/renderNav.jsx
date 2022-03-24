import React from 'react';
import { Link } from 'react-router-dom';

function renderNav(nav) {
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

export default renderNav;
