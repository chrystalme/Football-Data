import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import allstocks from '../style/allstocks.module.css';

const Competitions = ({ competition }) => {
  const {
    area, name, id, currentSeason,
  } = competition;
  return (
    <>
      <div className={allstocks.box} key={id}>
        <Link to={`/competitions/${id}`}>
          <div>
            <h2 className={allstocks.title}>
              {' '}
              {area.name}
              {' '}
            </h2>
            <h3>{name}</h3>
            <div>
              <ul>
                <li>{currentSeason.startDate}</li>
                <li>{currentSeason.endDate}</li>
                <li>{currentSeason.currentMatchDay}</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>

    </>
  );
};

Competitions.propTypes = {
  competition: PropTypes.objectOf(Array).isRequired,
};

export default Competitions;
