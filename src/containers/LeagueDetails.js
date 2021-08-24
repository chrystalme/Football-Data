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
  const league = useSelector((state) => state.league);
  const dispatch = useDispatch();
  const fetchLeague = async () => {
    const response = await axios.get(`https://api.football-data.org/v2/competitions/${code}/teams`, {
      mode: 'cors',
      headers: {
        'X-Auth-Token': '995e00e077394014bbba95a191625b10',
      },
    }).catch((err) => err);
    dispatch(getLeague(response.data));
  };

  useEffect(() => {
    if (code && code != null) fetchLeague();
  }, []);

  console.log(league);
  return (

    <div>
      <Nav />
      <div>
        <h2>League Details</h2>
        {league.map((league) => (<League key={league.competition.id} league={league} />))}
      </div>
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
