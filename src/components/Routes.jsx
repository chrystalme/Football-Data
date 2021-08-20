import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import App from './App';
import Competitions from './Competitions';
import League from './League';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/competition" component={Competitions} />
      <Route path="/competition/:symbol" component={League} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
