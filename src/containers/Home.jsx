import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import HomeCard from '@components/Home/HomeCard';
import DownArrow from '@components/DownArrow';

function Home() {
  const download = 'https://drive.google.com/uc?id=1kV_x1dJ1R6sVWuXdtWUhK2iTg-DAgV5f&export=download';
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  const handleClick = () => {
    ReactGA.event({
      category: 'Home',
      action: 'Clicked on Download',
    });
    window.open(download, '_blank');
  };
  return (
    <div className="main-home">
      <Helmet>
        <title>Sebastian Rivera Ocampo</title>
        <meta name="description" content="Sebastian Rivera Ocampo's personal blog homepage" />
      </Helmet>
      <section className="home-left">
        <div className="content">
          <h1>Frontend Developer</h1>
          <p>UI:UX enthusiasth</p>
          <p>Clean code</p>
          <button type="button" className="cv-download-link" onClick={handleClick} href={download} download="Frontend_SebastianRiveraOcampo_CV">
            Download CV
          </button>
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
}

export default Home;
