import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import NavDesktop from '@components/Header/NavDesktop';
import HeaderMobile from '@components/Header/HeaderMobile';
import ArticleCard from '@components/Articles/ArticleCard';
import Loader from '@components/Loader';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState('');
  const [filtered, setFilter] = useState([]);
  const URL = 'https://afternoon-shore-25033.herokuapp.com/api/v1/articles';

  const filterArticles = (sentence) => {
    const includes = (article) => article.title.toLowerCase().includes(sentence.toLowerCase());
    const filter = articles.filter((article) => includes(article));
    setFilter(filter);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filterArticles(e.target.value);
  };

  function renderArticles() {
    if (loading) {
      return <Loader />;
    }
    return filtered.map((article) => <ArticleCard key={article.id} article={article} />);
  }

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setFilter(data);
      })
      .then(() => setLoading(false));
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="main-articles">
      { loading ? <Loader />
        : (
          <>
            <Helmet>
              <title>Articles</title>
              <meta name="description" content="Here you can find web development articles" />
            </Helmet>
            <HeaderMobile nav="articles" name="Articles" />
            <div className="main-articles__content">
              <div className="articles-header">
                <input type="text" id="searchbar" value={busqueda} onChange={handleChange} placeholder="Buscar..." />
                <NavDesktop nav="articles" />
              </div>
              <div className="articles-container">
                {renderArticles()}
              </div>
            </div>
          </>
        )}
    </div>
  );
}

export default Articles;
