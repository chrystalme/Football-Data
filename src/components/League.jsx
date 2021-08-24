import React from 'react';
import PropTypes from 'prop-types';

const League = ({ league }) => {
  const { name, area, seasons } = league;
  return (
    <div>
      <h2>League Details</h2>
      <h2>
        {name}
      </h2>
      <h3>{area.name}</h3>
      <div>
        {seasons.map((season) => (
          <>
            <img src={season.winner.name != null ? season.winner.crestUrl : ''} alt={season.winner.name} />
            <h3 key={season.id}>
              { season.winner.name }

            </h3>
          </>
        ))}
      </div>

    </div>
  );
};

League.propTypes = {
  league: PropTypes.shape({
    name: PropTypes.string.isRequired,
    seasons: PropTypes.arrayOf.isRequired,
    area: PropTypes.objectOf.isRequired,
  }).isRequired,
};

export default League;
