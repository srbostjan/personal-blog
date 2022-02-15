import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import showdown from 'showdown';
import parse from 'html-react-parser';

import HeaderMobile from '../components/Header/HeaderMobile';
import NavDesktop from '../components/Header/NavDesktop';
import Loader from '../components/Loader';

const ViewArticle = (props) => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();
  let converter = new showdown.Converter();

  if(props.article) {
    setArticle(props.article);
    setIsLoading(false);
  } else {
    let url = `https://afternoon-shore-25033.herokuapp.com/api/v1/articles/${id}`;
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setArticle(data))
        .then(() => setIsLoading(false));
    }, []);
  }

  return (
    <div className="main-article">
      {isLoading ? <Loader /> :
        <>
          <HeaderMobile name='Article'/>
          <section className='article__content'>
            <div className='article-header'>
              <h1 className='article--title'>{article.title}</h1>
              <NavDesktop />
            </div>
            <div className='article__content--content'>
              {parse(converter.makeHtml(article.content))}
            </div>
          </section>
        </>
      }
    </div>
  );
};

export default ViewArticle;