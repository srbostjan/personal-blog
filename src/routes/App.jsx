import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Layout from '@containers/Layout';
import Home from '@containers/Home';
import Biography from '@containers/Biography';
import Articles from '@containers/Articles';
import NotFound from '@containers/NotFound';
import ViewArticle from '@containers/ViewArticle';
import '@styles/app.scss';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-EQN0TRE7W4');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
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
}

export default App;
