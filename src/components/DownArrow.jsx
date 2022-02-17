import React, { useState, useEffect } from 'react'

const DownArrow = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  let handleScroll = () => {
    setScroll(window.scrollY);
  };
  let handleClick = (e) => {
    if(scroll > 200) {
      window.scrollTo(0, -window.innerHeight);
      e.target.classList.remove('up');
    } else {
      window.scrollTo(0, window.innerHeight);
      e.target.classList.add('up');
    }
  };
  return (
    <a onClick={handleClick}><i className="fas fa-arrow-circle-right down-arrow"></i></a>
  );
};

export default DownArrow;