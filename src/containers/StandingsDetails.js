import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StandingsDetails = () => {
  const { id } = useParams();
  const fetchStandings = async () => {
    try {
      const response = await axios.get(`https://api.football-data.org/v2/team/${id}`, {
        mode: 'cors',
        headers: {
          'X-Auth-Token': '995e00e077394014bbba95a191625b10',
        },
      });
      console.log(response.data);
    } catch (err) { (console.log(err)); }
  };
  fetchStandings();
  return (
    <div>StandingsDetails</div>
  );
};

export default StandingsDetails;
