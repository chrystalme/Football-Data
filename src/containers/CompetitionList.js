import React, { useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { filtered } from '../helpers/utils';
import Competition from '../components/Competition';
import { getAll } from '../actions';

const CompetitionList = () => {
  const competitions = useSelector((state) => state.competitions);
  // const [competitions, getAll] = useState([]);
  const dispatch = useDispatch();

  const fetchCompetitions = async () => {
    const response = await axios('https://api.football-data.org/v2/competitions/', {
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

    <div>
      Here my List appears
      {
      // Object.entries(competitions)
      //   .filter(([key, value]) => key === CATEGORY.key && value === CATEGORY.value)
        filtered(competitions).map((competition) => (
          <Competition key={competition.id} competition={competition} />
        ))
  }
    </div>

  );
};

// CompetitionList.propTypes = {
//   competitions: PropTypes.instanceOf(Array).isRequired,
// };

const mapStateToProps = (state) => ({
  competitions: state.competitions,
});
// const mapDispatchToProps = (dispatch) => ({
//   fetchCompetitions: (data) => dispatch(getAll(data)),
// });
const connectedComponent = connect(mapStateToProps, null)(CompetitionList);

export default connectedComponent;
