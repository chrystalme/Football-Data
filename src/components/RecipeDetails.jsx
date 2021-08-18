import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../actions';
// import RecipeDetails from '../components/RecipeDetails';

const RecipeDetails = () => {
  const { symbol } = useParams();
  const stock = useSelector((state) => state.stocks.find((stock) => stock.symbol === symbol));
  const dispatch = useDispatch();
  console.log(symbol);
  const getStockDetails = async () => {
    const response = await axios
      .get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=765fd78f4fc8f00e79f89813b976ec9a`)
      .catch((err) => {
        throw err;
      });
    console.log(stock);
    console.log(response.data);
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

export default RecipeDetails;
