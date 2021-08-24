import React from 'react';
import PropTypes from 'prop-types';

const League = ({ league }) => {
  const { competition, season, teams } = league;
  console.log(league);

  return (
    <div>
      <h3>{competition.name}</h3>
      <h3>{season.startDate}</h3>
      {teams.map((team) => (<h5 key={team.id}>{team.name}</h5>))}
    </div>
  );
};

League.propTypes = {
  league: PropTypes.shape({
    competition: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    season: PropTypes.shape({
      startDate: PropTypes.string,
    }),
    teams: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
};

export default League;
