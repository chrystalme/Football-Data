import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import { setCompetitions } from '../store/competitionSlice';
import Category from '../components/Category';

const CategoryList = () => {
  const categories = useSelector((state) => state.competitionReducer.categories);
  // const dispatch = useDispatch();
  const fetchCategories = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php', {
      mode: 'cors',
    }).catch((err) => console.log(err));
    const data = await response.json();
    console.log(data);
    // dispatch(setCompetitions(data));
    return data;
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  console.log(categories);
  return (

    <div>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>

  );
};

// CompetitionList.propTypes = {
//   competitions: PropTypes.arrayOf(Object).isRequired,
// };

// const mapStateToProps = (state) => ({
//   competitions: state.competitions,
// });
// const connecteComponent = connect(mapStateToProps, null)();

export default CategoryList;
