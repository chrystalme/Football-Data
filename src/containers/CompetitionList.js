import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import recipelist from '../style/recipelist.module.css';
import { setCompetitions } from '../store/competitionSlice';
import Competitions from '../components/Competitions';

const CompetitionList = () => {
  const competitions = useSelector((state) => state.competitionsReducer.competitions);
  const dispatch = useDispatch();
  const fetchCompetitions = async () => {
    const response = await fetch('http://api.football-data.org/v2/competitions', {
      mode: 'cors',
      headers: {
        'X-Auth-Token': '995e00e077394014bbba95a191625b10',
      },
    }).catch((err) => console.log(err));
    const data = await response.json();
    dispatch(setCompetitions(data));
    console.log(competitions);
    // console.log(competitions);
    return data;
  };

  useEffect(() => {
    fetchCompetitions();
  }, []);
  return (
    <div className={recipelist.container}>
      This is the recipelist
      {
        competitions.map((competition) => (
          <Competitions key={competition.id} competition={competition} />
        ))
      }
    </div>
  );
};

export default CompetitionList;
