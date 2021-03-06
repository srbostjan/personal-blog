import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import showdown from 'showdown';
import parse from 'html-react-parser';
import propTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import HeaderMobile from '@components/Header/HeaderMobile';
import NavDesktop from '@components/Header/NavDesktop';
import Loader from '@components/Loader';

function ViewArticle() {
  const [newArticle, setNewArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const converter = new showdown.Converter();
  const url = `https://afternoon-shore-25033.herokuapp.com/api/v1/articles/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewArticle(data))
      .then(() => setIsLoading(false));
    ReactGA.pageview('/homepage');
  }, []);

  return (
    <div className="main-article">
      {isLoading ? <Loader />
        : (
          <>
            <Helmet>
              <title>{newArticle.title || 'Loading...'}</title>
              <meta name="description" content={newArticle.resume || 'Article resume'} />
            </Helmet>
            <HeaderMobile name="Article" nav="articles" />
            <section className="article__content">
              <div className="article-header">
                <h1 className="article--title">{newArticle.title}</h1>
                <NavDesktop nav="articles" />
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
    title: propTypes.string,
    content: propTypes.string,
  }).isRequired,
};

export default ViewArticle;
