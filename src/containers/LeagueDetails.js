import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getLeague } from '../actions';
import League from '../components/League';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const LeagueDetails = () => {
  const { code } = useParams();
  const league = useSelector((state) => state.league);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const fetchLeague = async () => {
    try {
      const response = await axios.get(`https://api.football-data.org/v2/competitions/${code}/teams`, {
        mode: 'cors',
        headers: {
          'X-Auth-Token': '995e00e077394014bbba95a191625b10',
        },
      });
      return dispatch(getLeague(response.data));
    } catch (err) { return err.message; } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (code && code != null) fetchLeague();
  }, []);

  return (

    <>
      <Nav />
      <div>
        { isLoading && <p className="text-center m-auto">Loading...</p> }
        {league.map((league) => (<League key={league.competition.id} league={league} />))}
      </div>
      <Footer />
    </>

  );
};

const mapStateToProps = (state) => ({
  league: state.league,
});

const connectedComponent = connect(mapStateToProps, null)(LeagueDetails);

export default connectedComponent;
