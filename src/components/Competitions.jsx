import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import allstocks from '../style/allstocks.module.css';

// const competition = useSelector(((state) => state.competitionReducer.competitions));

const Competitions = () => {
  // const {
  // area, name, id, currentSeason,
  // } = competition;
  (
    <>
      <div className={allstocks.box}>
        Here is the list of competitions:
        {/* <Link to={`/competitions/${id}`}>
          <div>
            <h2 className={allstocks.title}>
              {area.name}
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
        </Link> */}
      </div>

    </>
  );
};
Competitions.propTypes = {
  competition: PropTypes.objectOf(Array).isRequired,
};

export default Competitions;
