import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

const League = () => {
  const { id } = useParams();
  const league = useSelector((state) => state
    .competitionReducer.competitions
    .find((competition) => (competition.id === id)));
  const {
    name, area, emblemUrl, currentSeason, seasons,
  } = league;

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
