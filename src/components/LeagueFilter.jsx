import React from 'react';
import PropTypes from 'prop-types';

const LeagueFilter = ({ changeFilter }) => (
  <>
    <input
      type="text"
      placeholder="Search major leagues"
      onChange={changeFilter}
    />

  </>
);

LeagueFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
export default LeagueFilter;
