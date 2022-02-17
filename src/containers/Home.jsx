import React from 'react';

import HomeCard from '../components/Home/HomeCard';
import DownArrow from '../components/DownArrow';

const Home = () => {
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
      <DownArrow />
    </div>
  );
};

export default Home;