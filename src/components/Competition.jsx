import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Competition = ({ competition }) => {
  const {
    name, area, id, ensignUrl,
  } = competition;
  return (

    <Link to={`league/${id}`} style={{ marginTop: 5 }}>
      <h2>
        {name}
        {' '}
        |
        {area.name}
        {' '}
        {/* | start date:
        {currentSeason.startDate}
        {' '}
        | end date:
        {currentSeason.endDate}
        {' '}
        |
        {currentSeason.currentMatchday} */}
      </h2>
      <img style={{ width: 500 }} alt={name} src={ensignUrl === null ? 'Nicehttps://static6.depositphotos.com/1007347/574/v/600/depositphotos_5749760-stock-illustration-football.jpg' : ensignUrl} />

    </Link>

  );
};
Competition.propTypes = {
  competition: PropTypes.instanceOf(Array).isRequired,
};

export default Competition;
