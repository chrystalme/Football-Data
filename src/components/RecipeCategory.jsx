import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import allstocks from '../style/allstocks.module.css';

const RecipeCategory = ({ stock }) => (
  <div className={allstocks.box} key={stock.symbol}>
    <h2 className={allstocks.title}>{stock.companyName}</h2>
    <h3>{stock.symbol}</h3>
    <h4>
      Price: $
      <NumberFormat value={stock.price} displayType="text" thousandSeparator />
    </h4>
    <h4>
      Volume: $
      <NumberFormat value={stock.volume} displayType="text" thousandSeparator />
    </h4>
    <h4>
      Sector:
      {stock.sector}
    </h4>
  </div>
);

RecipeCategory.propTypes = {
  stock: PropTypes.objectOf(Array).isRequired,
};

export default RecipeCategory;
