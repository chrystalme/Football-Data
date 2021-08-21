import React from 'react';
import nav from '../style/nav.module.css';
import SearchStock from './LeagueFilter';

const Nav = () => (
  <nav className={nav.nav}>
    <div><a href="/">RecipesEase</a></div>
    <div className={nav.right}>
      <a href="/category">Category</a>
      <a href="/About">About</a>
      <SearchStock />
    </div>
  </nav>
);
export default Nav;
