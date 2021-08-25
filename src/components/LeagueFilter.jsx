import React from 'react';
import PropTypes from 'prop-types';
import style from '../style/filter.module.css';

const LeagueFilter = ({ changeFilter }) => (
  <div className={style.container}>
    <input
      type="text"
      placeholder="Search major leagues"
      onChange={changeFilter}
      className={style.input}
    />

  </div>
);

LeagueFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
export default LeagueFilter;
