import React from 'react';
import style from '../style/footer.module.css';

const Footer = () => (
  <div className={style.container}>
    <div><a href="/">Home</a></div>
    <div>
      <span>
        Built by
        <a href="http://linkein.com">@afam_chrys</a>
        <a href="http://linkein.com">@afam_chrys</a>
        <a href="http://linkein.com">@afam_chrys</a>
      </span>
    </div>
    <div>
      <h5>
        Special Thanks to
        <a href="https://www.football-data.org/"> Football Data</a>
      </h5>
    </div>
  </div>
);

export default Footer;
