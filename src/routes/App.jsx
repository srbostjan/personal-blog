import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Biography from '../containers/Biography';
import Articles from '../containers/Articles';
import NotFound from '../containers/NotFound';

import '../styles/app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;