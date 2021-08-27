import React from 'react';
import style from '../style/footer.module.css';

const Footer = () => (
  <div className={style.container}>
    <div><a href="/">Home</a></div>
    <div>
      <span className="flex flex-row gap-3">
        <a target="_blank" rel="noreferrer" href="https://github.com/chrystalme">
          <i className="fab fa-2x fa-github"> </i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/afam-chrys">
          <i className="fab fa-2x fa-linkedin"> </i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/afam_ifeanyi">
          <i className="fab fa-2x fa-twitter"> </i>
        </a>
      </span>
    </div>
    <div>
      <h5>
        Special Thanks to
        <a className="font-bold" href="https://www.football-data.org/"> Football Data</a>
      </h5>
    </div>
  </div>
);

export default Footer;
