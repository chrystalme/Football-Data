import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getLeague } from '../actions';
// import PropTypes from 'prop-types';

const League = () => {
  const { code } = useParams();
  const league = useSelector((state) => state
    .leagueReducer.league
    .find((competition) => (competition.code === code)));
  const {
    name, area, emblemUrl, currentSeason, seasons,
  } = league;

  useEffect(() => {
    getLeague();
  }, []);

  return (
    <div>
      <h2>League Details</h2>
      <img src={emblemUrl} alt={name} />
      <h2>{area.name}</h2>
      <h3>{name}</h3>
      <h3>{currentSeason.startDate}</h3>
      <span>{currentSeason.endDate}</span>
      <span>{currentSeason.currentMatchday}</span>
      <p>Previous seasons winners</p>
      <ul>
        {seasons.map((season) => (
          <li key={season.id}>
            {season.endDate}
            {' '}
            |
            {' '}
            {season.winner.name}
            {' '}
            |
            {' '}
            {season.winner.crestUrl}
          </li>
        ))}
      </ul>
    </div>
  );
};
// League.propTypes = {
//   league: PropTypes.objectOf.isRequired,
// };

export default League;
