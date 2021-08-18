import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import allstocks from '../style/allstocks.module.css';
import { getRecipe } from '../actions';

const RecipeCategory = ({ stock }) => {
  const dispatch = useDispatch();

  const {
    symbol, companyName, price, volume, sector,
  } = stock;

  const handleClick = () => {
    dispatch(getRecipe(stock));
  };
  return (
    <>

      <div className={allstocks.box} key={symbol}>
        <Link to={`/recipe-details/${symbol}`} onClick={handleClick}>
          <div>
            <h2 className={allstocks.title}>
              {' '}
              {companyName}
              {' '}
            </h2>
            <h3>{symbol}</h3>
            <h4>
              Price: $
              <NumberFormat value={price} displayType="text" thousandSeparator />
            </h4>
            <h4>
              Volume: $
              <NumberFormat value={volume} displayType="text" thousandSeparator />
            </h4>
            <h4>
              Sector:
              {sector}
            </h4>
          </div>
        </Link>
      </div>

    </>
  );
};

RecipeCategory.propTypes = {
  stock: PropTypes.objectOf(Array).isRequired,
};

export default RecipeCategory;
