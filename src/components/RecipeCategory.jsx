import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import allstocks from '../style/allstocks.module.css';

const RecipeCategory = ({ stock }) => {
  const {
    symbol, companyName, price, volume, sector,
  } = stock;
  return (
    <>

      <div className={allstocks.box} key={symbol}>
        <Link to={symbol}>
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
