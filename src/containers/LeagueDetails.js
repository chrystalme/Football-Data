import React, { useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getLeague } from '../actions';
// import PropTypes from 'prop-types';
// import { setCompetitions } from '../store/competitionSlice';
import League from '../components/League';
import Nav from '../components/Nav';

const LeagueDetails = () => {
  const { code } = useParams();
  const leagues = useSelector((state) => state.league);
  const dispatch = useDispatch();
  const fetchLeague = async () => {
    const response = await axios(`https://api.football-data.org/v2/competitions/${code}`, {
      mode: 'cors',
      headers: {
        'X-Auth-Token': '995e00e077394014bbba95a191625b10',
      },
    }).catch((err) => err);
    dispatch(getLeague(response.data));
  };

  useEffect(() => {
    fetchLeague();
  }, []);
  console.log(leagues);
  return (

    <div>
      <Nav />
      this is the league page
      {Object.entries(leagues).map((league) => (
        <League key={league.id} league={league} />
      ))}
    </div>

  );
};

// LeagueDetails.propTypes = {
//   competitions: PropTypes.arrayOf(Object).isRequired,
// };

const mapStateToProps = (state) => ({
  league: state.league,
});
const connectedComponent = connect(mapStateToProps, null)(LeagueDetails);

export default connectedComponent;
