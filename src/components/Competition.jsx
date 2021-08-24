import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import all from '../style/allCompetitions.module.css';

const Competition = ({ competition }) => {
  const {
    name, area, code, emblemUrl,
  } = competition;
  return (

    <Link to={`league/${code}`} style={{ marginTop: 5 }}>
      <div className={all.box}>
        <h2 className={all.title}>{name}</h2>
        <h2 className={all.title}>{area.name}</h2>
        <img
          src={emblemUrl === null
            ? 'https://static6.depositphotos.com/1007347/574/v/600/depositphotos_5749760-stock-illustration-football.jpg'
            : emblemUrl}
          alt={name}
          style={{ width: 100 }}
        />
      </div>

    </Link>

  );
};
Competition.propTypes = {
  competition: PropTypes.shape({
    name: PropTypes.string.isRequired,
    area: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
    code: PropTypes.string.isRequired,
    emblemUrl: PropTypes.string,
  }).isRequired,
};

export default Competition;
