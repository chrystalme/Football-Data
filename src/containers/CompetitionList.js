import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { filtered } from '../helpers/utils';
import Competition from '../components/Competition';
import { changeFilter, getAll } from '../actions';
import LeagueFilter from '../components/LeagueFilter';
import style from '../style/allCompetitions.module.css';

const CompetitionList = ({ handleFilterChange }) => {
  const competitions = useSelector((state) => state.competitions);
  const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(null);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const fetchCompetitions = async () => {
    const response = await axios
      .get('https://api.football-data.org/v2/competitions/', {
        mode: 'cors',
        headers: {
          'X-Auth-Token': '995e00e077394014bbba95a191625b10',
        },
      }).catch((err) => err);
    setIsLoading(false);
    const { competitions } = response.data;
    dispatch(getAll(competitions));
  };

  useEffect(() => {
    fetchCompetitions();
    changeFilter();
  }, []);

  return (
    <>
      <LeagueFilter changeFilter={handleFilterChange} />
      {isLoading && <p className="text-center m-auto">Loading...</p>}
      <div className={style.container}>
        {filtered(competitions)
          .filter((competition) => (filter === ''
            ? filtered(competitions)
            : competition.name.toLowerCase().includes(filter.toLowerCase())))
          .map((competition) => (
            <Competition key={competition.id} competition={competition} />
          ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  competitions: state.competitions,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  handleFilterChange: (filter) => dispatch(changeFilter(filter.target.value)),
});

CompetitionList.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(CompetitionList);

export default connectedComponent;
