import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../actions';
// import * as endpoint from '../helpers/endpoints';
// import fetchRecipe from '../actions/fetchRecipe';

const recipe = () => {
  const recipes = useSelector((state) => state.recipe.recipes);
  const dispatch = useDispatch();
  const fetchRecipe = async () => {
    const response = await axios
      .get('www.themealdb.com/api/json/v1/1/random.php')
      .catch((err) => {
        console.log(err);
      });
    dispatch(getRecipes(response.data));
  };
  useEffect(() => {
    fetchRecipe();
  }, []);
  console.log(recipes);
  return (
    <div>
      This is the component render
    </div>
  );
};

export default recipe;