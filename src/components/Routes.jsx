import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import App from './App';
import RecipeDetails from './RecipeDetails';
import RecipeCategory from './RecipeCategory';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/recipe-details/:symbol" component={RecipeDetails} />
      <Route path="/stockScreener" component={RecipeCategory} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
