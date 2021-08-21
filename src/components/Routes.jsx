import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import App from './App';
import Category from './Category';
import League from './League';
import About from './About';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/competition" component={Category} />
      <Route path="/league/:id" component={League} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
