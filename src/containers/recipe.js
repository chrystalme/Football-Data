import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userParams } from 'react-router-dom';
import { getRecipe } from '../actions';
import RecipeDetails from '../components/RecipeDetails';

export const Recipe = () => {
  const { symbol } = userParams();
  const dispatch = useDispatch();
  console.log(symbol);
  const getStockDetails = async () => {
    const response = await axios
      .get('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=765fd78f4fc8f00e79f89813b976ec9a')
      .catch((err) => {
        throw err;
      });
    dispatch(getRecipe(response.data));
  };
  useEffect(() => {
    getStockDetails();
  }, {});
  return (
    <div>
      <RecipeDetails />
    </div>
  );
};

export default Recipe;
