import React, { useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch, useSelector } from 'react-redux';
import { filtered } from '../helpers/utils';
import Competition from '../components/Competition';
import { getAll } from '../actions';
import style from '../style/allCompetitions.module.css';

const CompetitionList = () => {
  const competitions = useSelector((state) => state.competitions);
  const dispatch = useDispatch();

  const fetchCompetitions = async () => {
    const response = await axios.get('https://api.football-data.org/v2/competitions/', {
      mode: 'cors',
      headers: {
        'X-Auth-Token': '995e00e077394014bbba95a191625b10',
      },
    }).catch((err) => err);
    const { competitions } = response.data;
    dispatch(getAll(competitions));
  };

  useEffect(() => {
    fetchCompetitions();
  }, []);

  return (

    <div className={style.container}>
      {
        filtered(competitions).map((competition) => (
          <Competition key={competition.id} competition={competition} />
        ))
  }
    </div>

  );
};

const mapStateToProps = (state) => ({
  competitions: state.competitions,
});

const connectedComponent = connect(mapStateToProps, null)(CompetitionList);

export default connectedComponent;
