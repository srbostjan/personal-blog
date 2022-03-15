import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

function NotFound() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div className="not-found">
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go to homepage</Link>
    </div>
  );
}

export default NotFound;
