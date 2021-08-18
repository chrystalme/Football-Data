import React from 'react';
import PropTypes from 'prop-types';

const StockFilter = ({ changeFilter }) => (
  <>
    <input type="text" placeholder="Enter symbol to search" onChange={(e) => changeFilter(e.target.value)} />

  </>
);

StockFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default StockFilter;
