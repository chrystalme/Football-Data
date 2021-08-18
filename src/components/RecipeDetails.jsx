import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../actions';

const RecipeDetails = () => {
  const { symbol } = useParams();
  const stock = useSelector((state) => state.stockReducer.stocks
    .filter((stock) => stock.symbol === symbol));

  console.log(stock);
  const {
    image, ceo, description, companyName, mktCap, website,
  } = stock;

  const dispatch = useDispatch();
  const fetchStock = async () => {
    const response = await axios
      .get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=765fd78f4fc8f00e79f89813b976ec9a`)
      .catch((err) => {
        throw err;
      });
    dispatch(getRecipe(response.data));
  };
  useEffect(() => {
    fetchStock();
  }, []);
  return (
    <div>
      <img src={image} alt={companyName} />
      <h2>{companyName}</h2>
      <h3>{ceo}</h3>
      <h3>{mktCap}</h3>
      <span>{website}</span>
      <span>{description}</span>
    </div>
  );
};
// RecipeDetails.propTypes = {
//   stock: PropTypes.objectOf.isRequired,
// };

export default RecipeDetails;
