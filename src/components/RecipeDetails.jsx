import React, { /* useEffect */ } from 'react';
// import axios from 'axios';
import { /* useDispatch, */ useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getRecipe } from '../actions';
// import RecipeDetails from '../components/RecipeDetails';

const RecipeDetails = () => {
  const { symbol } = useParams();
  const stock = useSelector((state) => state.stockReducer.stocks
    .filter((stock) => stock.symbol === symbol));

  console.log(stock);
  console.log(symbol);

  return (
    <div>
      <RecipeDetails />
    </div>
  );
};

export default RecipeDetails;
