import React, { useState, useEffect } from 'react';

function DownArrow() {
  const [scroll, setScroll] = useState(0);
  const [iconClass, setIconClass] = useState('fas fa-arrow-circle-down down-arrow');
  const minScroll = 200;

  const scrollUpDown = () => {
    if (scroll > minScroll) window.scrollTo(0, -window.innerHeight);
    if (scroll < minScroll) window.scrollTo(0, window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => setScroll(window.scrollY));
    if (scroll > minScroll) setIconClass('fas fa-arrow-circle-up down-arrow');
    if (scroll < minScroll) setIconClass('fas fa-arrow-circle-down down-arrow');
  });

  return (
    <button type="button" className="down-arrow-button" onClick={scrollUpDown}>
      <i className={iconClass} />
    </button>
  );
}

export default DownArrow;
