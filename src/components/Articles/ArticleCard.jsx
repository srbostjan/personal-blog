import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.id}`} className="article" key={article.id}>
      <figure>
        <img src={article.portrait} alt={article.alt} />
      </figure>
      <div className="article--text">
        <h2 className="article-title">{article.title}</h2>
        <p className="article-content">{article.resume}</p>
      </div>
    </Link>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    resume: PropTypes.string.isRequired,
    portrait: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};
ArticleCard.defaultProps = {
  article: {
    id: 0,
    title: '',
    resume: '',
    portrait: '',
    alt: '',
  },
};

export default ArticleCard;
