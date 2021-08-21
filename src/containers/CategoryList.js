import React, { useEffect } from 'react';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Category from '../components/Category';
import { getAll } from '../actions';

const CategoryList = ({ competitions }) => {
  const dispatch = useDispatch();
  const fetchCompetitions = async () => {
    const response = await axios('https://api.football-data.org/v2/competitions/', {
      mode: 'cors',
      headers: {
        'X-Auth-Token': '995e00e077394014bbba95a191625b10',
      },
    }).catch((err) => err);
    const data = await response.json();
    console.log(data);
    dispatch(getAll(data));
    return data;
  };

  useEffect(() => {
    // if (competitions.competitions === null || competitions.competitions.length < 4) {
    //   fetchCompetitions();
    // } else {
    //   dispatch(getAll(competitions.competitions));
    // }
    fetchCompetitions();
  }, []);
  console.log(competitions);
  return (

    <div>
      Here my List appears

      {
      competitions.competitions.map((category) => (
        <Category key={category.idCategory} category={category} />
      ))
}
    </div>

  );
};

CategoryList.propTypes = {
  competitions: PropTypes.arrayOf(Object).isRequired,
//   // filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  competitions: state.competitions,
});
// const mapDispatchToProps = (dispatch) => ({
//   handleChangeFilter: (filter) => dispatch(changeFilter(filter.target.value)),
// });
const connectedComponent = connect(mapStateToProps, null)(CategoryList);

export default connectedComponent;
