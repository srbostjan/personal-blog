import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({article}) => {
  return (
    <Link to={`/articles/${article.id}`} className='article' key={article.id}>
    <h2 className='article-title'>{article.title}</h2>
    <p className='article-content'>{article.resume}</p>
  </Link>
  );
};

export default ArticleCard;