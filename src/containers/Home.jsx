import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import HomeCard from '../components/Home/HomeCard';

const Home = () => {
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
  let download = () => {
    window.open('https://drive.google.com/uc?id=1vCBRlqsu-T7dI5EqRxlRgk968JxSiNn6&export=download', '_blank');
  };
  return (
    <div className="main-home">
      <section className="home-left">
        <div className="content">
          <h1>Frontend Developer</h1>
          <p>UI:UX enthusiasth</p>
          <p>Clean code</p>
          <button onClick={download}><a>Download CV</a></button>
        </div>
      </section>
      <section className="home-right" id="home-right">
      <HomeCard name="Biography" to="biography" />
      <HomeCard name="Articles" to="articles" />
      <HomeCard name="Twitter" to="https://twitter.com/srbostjan" />
      <HomeCard name="Github" to="https://github.com/srbostjan" />
      </section>
      <a onClick={handleClick}><i className="fas fa-arrow-circle-right down-arrow"></i></a>
    </div>
  );
};

export default Home;