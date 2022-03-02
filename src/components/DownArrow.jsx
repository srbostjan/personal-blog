/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';

function DownArrow() {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  const handleClick = (e) => {
    if (scroll > 200) {
      window.scrollTo(0, -window.innerHeight);
      e.target.classList.remove('up');
    } else {
      window.scrollTo(0, window.innerHeight);
      e.target.classList.add('up');
    }
  };
  return (
    <button type="button" className="down-arrow-button" onClick={handleClick}><i className="fas fa-arrow-circle-right down-arrow" /></button>
  );
}

export default DownArrow;
