import React from 'react';
import nav from '../style/nav.module.css';

const Nav = () => (
  <nav className={nav.nav}>
    <div><a href="/">FootBallData</a></div>
    <div className={nav.right}>
      <a href="/">Home</a>
      <a href="/About">About</a>
    </div>
  </nav>
);

export default Nav;
