import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Biography from '../containers/Biography';
import Articles from '../containers/Articles';
import NotFound from '../containers/NotFound';
import ViewArticle from '../containers/ViewArticle';

import '../styles/app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/articles/:id" component={ViewArticle} />
          <Route exact path="/biography" component={Biography} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;