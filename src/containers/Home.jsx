import Markdown from 'markdown-to-jsx';
import React, { useState, useEffect } from 'react';
import {getArticles} from '../server/firebase';

const Home = () => {
  const [post, setPost] = useState('');

  useEffect(() => {
    async function fetchData() {
      let article = await getArticles();
      setPost(article[0].content);
      console.log(article[0].content);
    }
    fetchData();
  });
  return (
    <div className="main-home">
      <section className="home-text">
        <h1>Hi, I'm Sebastian Rivera</h1>
        <p>Frontend Developer</p>
        <p>Platzi Master C7 Student</p>
        <p className="last">Quick learner</p>
        <a
          href="https://drive.google.com/uc?id=1DVXwmeg5-XJ9I7CF0pP3zlObZklh5FXW&export=download"
          download="CV_Sebastian_Rivera"
          >Download CV
        </a>
        <Markdown>
          {post}
        </Markdown>
      </section>
      <figure className="home-img">
        <img
          src="https://i.ibb.co/SrpVG7Y/foto-yo.jpg"
          alt="foto perfil Sebastian Rivera"
        />
      </figure>
    </div>
  );
};

export default Home;