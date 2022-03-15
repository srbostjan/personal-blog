import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import HeaderMobile from '@components/Header/HeaderMobile';
import NavDesktop from '@components/Header/NavDesktop';
import DownArrow from '@components/DownArrow';

function Biography() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <div className="main-biography">
      <Helmet>
        <title>Biography</title>
        <meta name="description" content="Sebastian Rivera Ocampo's biography" />
      </Helmet>
      <HeaderMobile nav="biography" name="Biography" />
      <div className="main-biography__content">
        <div className="biography-header">
          <div />
          <NavDesktop nav="biography" />
        </div>
        <section className="my-info">
          <div className="my-info--presentation">
            <img src="https://i.ibb.co/bRx3FJm/people-guy-man-black-and-white-1.png" alt="" />
            <div className="biography--titles">
              <h3 className="biography--titles--title">Sebas Rivera</h3>
              <p>Frontend developer</p>
              <p>UI:UX Enthusiast</p>
            </div>
          </div>
          <section className="my-info__content">
            <section className="my-info--presentation">
              <div className="biography--titles">
                <h3>Sebas Rivera</h3>
                <p className="text">Frontend developer</p>
                <p className="text">UI:UX Enthusiast</p>
              </div>
            </section>
            <div className="resume">
              <h2>Resume</h2>
              <p className="text">Fronted developer and UI:UX enthusiast focused on creating clean code with good practices. specialized in: HTML, CSS, JavaScript, React, Redux, React Native, Vue, Sass, Webpack, Git/Github, UI Design Figma and Cypress.</p>
            </div>
            <div className="stack">
              <h2>Stack</h2>
              <ul className="stack-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Sass</li>
                <li>React Native</li>
                <li>Cypress</li>
                <li>Git</li>
                <li>Redux</li>
                <li>Webpack</li>
              </ul>
            </div>
          </section>
        </section>
      </div>
      <DownArrow />
    </div>
  );
}

export default Biography;
