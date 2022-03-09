import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTeam } from '../actions';
import apiKey from '../helpers/endpoints';

const TeamDetails = () => {
  const { id } = useParams();
  // const team = useSelector((state) => state.team);
  // console.log(team);
  console.log(id);
  const dispatch = useDispatch();
  const fetchStandings = async () => {
    const response = await axios.get(`https://api.football-data.org/v2/team/${id}`, {
      mode: 'cors',
      headers: {
        'X-Auth-Token': { apiKey },
      },
    }).catch((err) => err);
    console.log(response.data);
    dispatch(getTeam(response.data));
  };
  fetchStandings();

  return (
    <div>Team Details </div>
  );
};

export default TeamDetails;
