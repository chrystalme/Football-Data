import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import App from './App';
import Competition from './Competition';
import LeagueDetails from '../containers/LeagueDetails';
import StandingsDetails from '../containers/StandingsDetails';
import About from './About';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/competition" component={Competition} />
      <Route path="/league/:code" component={LeagueDetails} />
      {/* <Route path="/team/:tla" component={LeagueDetails} /> */}
      <Route path="/standings/:id" component={StandingsDetails} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
