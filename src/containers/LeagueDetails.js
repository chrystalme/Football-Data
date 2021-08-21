import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { setCompetitions } from '../store/competitionSlice';
import League from '../components/League';

const LeagueDetails = () => {
  const { id } = useParams();
  const league = useSelector((state) => state.competitionReducer.competition);
  // const dispatch = useDispatch();
  const fetchCompetitions = async () => {
    const response = await fetch(`http://api.football-data.org/v2/competitions/${id}`, {
      mode: 'cors',
      headers: {
        'X-Auth-Token': '995e00e077394014bbba95a191625b10',
      },
    }).catch((err) => console.log(err));
    const data = await response.json();
    // dispatch(setCompetitions(data));
    return data;
  };

  useEffect(() => {
    fetchCompetitions();
  }, []);
  console.log(id);
  return (

    <div>
      {league.map((league) => (
        <League key={league.id} league={league} />
      ))}
    </div>

  );
};

// LeagueDetails.propTypes = {
//   competitions: PropTypes.arrayOf(Object).isRequired,
// };

// const mapStateToProps = (state) => ({
//   competitions: state.competitions,
// });
// const connecteComponent = connect(mapStateToProps, null)();

export default LeagueDetails;
