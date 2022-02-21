import React, { useEffect } from 'react';
import HeaderMobile from '../components/Header/HeaderMobile';
import NavDesktop from '../components/Header/NavDesktop';
import DownArrow from '../components/DownArrow';

function Biography() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="main-biography">
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
              <h3>Sebas Rivera</h3>
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
              <p className="text">Fronted developer y UI:UX enthusiast enfocado en crear código limpio y con buenas practicas. especializado en: HTML, CSS, JavaScript, React, Redux, React Native, Vue, Sass, Webpack, Git/Github, UI Design Figma y Cypress.</p>
            </div>
            <div className="stack">
              <h2>Stack</h2>
              <p className="text">Fronted developer y UI:UX enthusiast enfocado en crear codigo limpio y con buenas practicas. especializado en: HTML, CSS, JavaScript, React, Redux, React Native, Vue, Sass, Webpack, Git/Github, UI Design Figma y Cypress.</p>
            </div>
          </section>
        </section>
      </div>
      <DownArrow />
    </div>
  );
}

export default Biography;
