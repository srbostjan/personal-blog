import React from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <div className="main-articles">
      <h2>Articles</h2>
      <section className="articles-cards--container">
        {/* {articles?.map(article => (
        <div key={article.id} className="articles-card">
          <figure className="articles-card--img">
            <img src="" alt="" />
          </figure>
          <div className="articles-card--text">
            <Link to='/article/${article.id}'>{article.title}</Link>
            <p>{article.content}</p>
          </div>
        </div>))} */}
      </section>
    </div>
  );
};

export default Articles;