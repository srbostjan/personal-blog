import React from 'react';

function NotFound() {
  window.document.title = 'Not Found';
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}

export default NotFound;
