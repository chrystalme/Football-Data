import React from 'react';
import PropTypes from 'prop-types';

const Standings = (data) => {
  const { competition, standings, season } = data;
  return (
    <>
      <div>
        <span>{competition.name}</span>
        <span>{season.startDate}</span>
        Standings
      </div>
      <div>
        <div>{standings.table.position}</div>
        <div>
          <span>{standings.team.name}</span>
          <span>
            {standings.position.crestUrl}
          </span>

        </div>
        <div />
      </div>
    </>
  );
};

Standings.propTypes = {
  competition: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
  standings: PropTypes.shape({
    table: PropTypes.arrayOf(
      PropTypes.shape({
        position: PropTypes.string.isRequired,
        team: PropTypes.shape({
          name: PropTypes.string.isRequired,
          crestUrl: PropTypes.string.isRequired,
        }).isRequired,
        playedGames: PropTypes.number.isRequired,
        won: PropTypes.number.isRequired,
        draw: PropTypes.number.isRequired,
        lost: PropTypes.number.isRequired,
        points: PropTypes.number.isRequired,
        goalsFor: PropTypes.number.isRequired,
        goalsAgainst: PropTypes.number.isRequired,
        goalDifference: PropTypes.number.isRequired,

      }),
    ).isRequired,
  }).isRequired,
  season: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    currentMatchday: PropTypes.number,
  }).isRequired,
};

export default Standings;
