import React, { useState, useEffect } from 'react';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://afternoon-shore-25033.herokuapp.com/api/v1/articles')
      .then(res => res.json())
      .then(data => setArticles(data))
      .then(() => setLoading(false));
  }, []);
  console.log(loading);
  return (
    <div className="main-articles">
      <h2>Articles</h2>
      <section className="articles-cards--container">
      {articles.length > 0 &&
        <h1>Hay!!</h1>
      }
      </section>
    </div>
  );
};

export default Articles;