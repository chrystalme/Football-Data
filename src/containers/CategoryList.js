import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Category from '../components/Category';
import { getAll } from '../actions';

const CategoryList = ({ categories }) => {
  const dispatch = useDispatch();
  const fetchCategories = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php', {
      mode: 'cors',
    }).catch((err) => console.log(err));
    const data = await response.json();
    console.log(data);
    dispatch(getAll(data));
    return data;
  };

  useEffect(() => {
    // if (categories === null || categories.categories.length < 4) {
    //   fetchCategories();
    // } else {
    //   dispatch(getAll(categories.categories));
    // }
    fetchCategories();
  }, []);
  console.log(categories.categories);
  return (

    <div>
      Here my List appears

      {
      categories.categories.map((category) => (
        <Category key={category.idCategory} category={category} />
      ))
}
    </div>

  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
//   // filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});
// const mapDispatchToProps = (dispatch) => ({
//   handleChangeFilter: (filter) => dispatch(changeFilter(filter.target.value)),
// });
const connecteComponent = connect(mapStateToProps, null)(CategoryList);

export default connecteComponent;
