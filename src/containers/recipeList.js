import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { changeFilter, getRecipes } from '../actions';
import fetchRecipes from '../actions/fetchRecipes';
import Recipe from '../components/Recipe';

const RecipeList = ({
  categories, /* fetchCategories, handleChangeFilter, filter */
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes(categories.categories));
  }, [fetchRecipes, categories.categories.length]);
  return (
    <div>
      { categories.map((category) => (<Recipe key={category.idCategory} category={category} />))}

    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeFilter: (meal) => dispatch(changeFilter(meal.target.value)),
  fetchCategories: dispatch(fetchRecipes),
});

const ConnectedComponent = connect(
  mapStateToProps, mapDispatchToProps,
)(RecipeList);

RecipeList.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
  // handleChangeFilter: PropTypes.func.isRequired,
  // filter: PropTypes.string.isRequired,
};

export default ConnectedComponent;
