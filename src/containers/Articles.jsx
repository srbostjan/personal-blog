import React, { useState, useEffect } from 'react';
import NavDesktop from '../components/Header/NavDesktop';
import HeaderMobile from '../components/Header/HeaderMobile';
import ArticleCard from '../components/Articles/ArticleCard';
import Loader from '../components/Loader';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState('');
  const [filtered, setFilter] = useState([]);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    console.log(e.target.value);
    filterArticles(e.target.value);
  };
  const filterArticles = (busqueda) => {
    let filtered = articles.filter(article => article.title.toLowerCase().includes(busqueda.toLowerCase()));
    setFilter(filtered);
  };

  useEffect(() => {
    fetch('https://afternoon-shore-25033.herokuapp.com/api/v1/articles')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setFilter(data);
      })
      .then(() => setLoading(false));
  }, []);
  return (
    <div className="main-articles">
      { loading ? <Loader /> :
        <>
          <HeaderMobile nav='articles' name='Articles'/>
          <div className='main-articles__content'>
            <div className='articles-header'>
              <input type="text" id='searchbar' value={busqueda} onChange={handleChange} placeholder='Buscar...' />
              <NavDesktop nav='articles'/>
            </div>
            <div className='articles-container'>
              {loading ?
                <div className='loading'>
                  <Loader />
                </div>:
                filtered.map(article => <ArticleCard key={article.id} article={article} />)
              }
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default Articles;