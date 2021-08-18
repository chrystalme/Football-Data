import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const SearchStock = ({ changeFilter }) => {
  const dispatch = useDispatch();
  const handleChangeFilter = () => {
    dispatch(changeFilter);
  };
  return (
    <>
      <input type="text" placeholder="Enter symbol to search" onChange={changeFilter} />
      <button type="button" onClick={handleChangeFilter}>Submit</button>
    </>
  );
};

SearchStock.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default SearchStock;
