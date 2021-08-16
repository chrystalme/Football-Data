import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../actions';
// import * as endpoint from '../helpers/endpoints';
// import fetchRecipe from '../actions/fetchRecipe';

const Recipe = () => {
  const recipe = useSelector((state) => state.recipe.recipes);
  const dispatch = useDispatch();
  const { ingredients, name } = recipe;
  const fetchRecipe = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log(err);
      });
    dispatch(getRecipes(response.data));
  };
  useEffect(() => {
    fetchRecipe();
  }, []);
  console.log(recipe);
  return (
    <div>
      This is the component render
      <h3>{name}</h3>
      <p>{ingredients}</p>
    </div>
  );
};

export default Recipe;
