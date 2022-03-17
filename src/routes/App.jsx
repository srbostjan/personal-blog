import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from '@containers/Home';
import Biography from '@containers/Biography';
import Articles from '@containers/Articles';
import NotFound from '@containers/NotFound';
import ViewArticle from '@containers/ViewArticle';
import '@styles/app.scss';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-8X1VV6KVB1');
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles/:id" component={ViewArticle} />
        <Route exact path="/biography" component={Biography} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
