import React from 'react';
import HomeCard from '../components/home/HomeCard';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="main-home">
      <section className="home-left">
        <div className="content">
          <h1>Frontend Developer</h1>
          <p>UI:UX enthusiasth</p>
          <p>Clean code</p>
          <button><Link to='/articles'>Download CV</Link></button>
        </div>
      </section>
      <section className="home-right">
      <HomeCard name="Biography" />
      <HomeCard name="Articles" />
      <HomeCard name="Twitter" />
      <HomeCard name="Github" />
      </section>
    </div>
  );
};

export default Home;