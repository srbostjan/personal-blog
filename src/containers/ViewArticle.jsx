import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import showdown from 'showdown';
import parse from 'html-react-parser';
import propTypes from 'prop-types';
import HeaderMobile from '../components/Header/HeaderMobile';
import NavDesktop from '../components/Header/NavDesktop';
import Loader from '../components/Loader';

function ViewArticle({ article }) {
  const [newArticle, setNewArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const converter = new showdown.Converter();
  if (article) {
    setNewArticle(article);
    setIsLoading(false);
  } else {
    const url = `https://afternoon-shore-25033.herokuapp.com/api/v1/articles/${id}`;
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setNewArticle(data))
        .then(() => setIsLoading(false));
    }, []);
  }
  return (
    <div className="main-article">
      {isLoading ? <Loader />
        : (
          <>
            <HeaderMobile name="Article" />
            <section className="article__content">
              <div className="article-header">
                <h1 className="article--title">{newArticle.title}</h1>
                <NavDesktop />
              </div>
              <div className="article__content--content">
                {parse(converter.makeHtml(newArticle.content))}
              </div>
            </section>
          </>
        )}
    </div>
  );
}

ViewArticle.propTypes = {
  article: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    resume: propTypes.string.isRequired,
    portrait: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
  }),
};
ViewArticle.defaultProps = {
  article: {
    id: 0,
    title: '',
    resume: '',
    portrait: '',
    alt: '',
  },
};

export default ViewArticle;
