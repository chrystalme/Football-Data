import React from 'react';
import PropTypes from 'prop-types';
import style from '../style/league.module.css';
import Nav from './Nav';
import Footer from './Footer';

const League = ({ league }) => {
  const { competition, season, teams } = league;
  console.log(league);

  return (
    <div>
      <Nav />
      <div className={style.header}>
        <h3>
          {competition.name}
          {' '}
          |
          {' '}
          {competition.area.name}
        </h3>
        <h3>
          Current Match Day:
          {' '}
          {season.currentMatchday}
        </h3>
        <h3>
          Start Date:
          {' '}
          {season.startDate}
        </h3>
        <h3>
          End Date:
          {' '}
          {season.endDate}
        </h3>
      </div>
      <div className={style.container}>
        {teams.map((team) => (
          <div className={style.item} key={team.id}>
            <h5>{team.name}</h5>
            <img style={{ width: 100 }} src={team.crestUrl === null ? 'https://static6.depositphotos.com/1007347/574/v/600/depositphotos_5749760-stock-illustration-football.jpg' : team.crestUrl} alt={team.name} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

League.propTypes = {
  league: PropTypes.shape({
    competition: PropTypes.shape({
      name: PropTypes.string.isRequired,
      area: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    }).isRequired,
    season: PropTypes.shape({
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      currentMatchday: PropTypes.string,
    }),
    teams: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      crestUrl: PropTypes.string,
    }).isRequired).isRequired,
  }).isRequired,
};

export default League;
