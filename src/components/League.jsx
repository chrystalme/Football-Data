import React from 'react';
import PropTypes from 'prop-types';

const League = ({ league }) => {
  const { competition, season } = league;
  console.log(league);

  return (
    <div>
      <h3>{competition.name}</h3>
      <h3>{season.startDate}</h3>
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
  }).isRequired,
};

export default League;
