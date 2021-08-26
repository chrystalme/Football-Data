import React from 'react';
import { Link } from 'react-router-dom';
import nav from '../style/nav.module.css';

const Nav = () => (
  <nav className={nav.nav}>
    <div><a href="/">FootBallData</a></div>
    <div className={nav.right}>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </div>
  </nav>
);

export default Nav;
