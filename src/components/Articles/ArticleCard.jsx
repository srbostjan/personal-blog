import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({article}) => {
  return (
    <Link to={`/articles/${article.id}`} className='article' key={article.id}>
        <img src={article.portrait} alt={article.alt} />
      <div className="article--text">
        <h2 className='article-title'>{article.title}</h2>
        <p className='article-content'>{article.resume}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;