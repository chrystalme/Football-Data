import React from 'react';
// import PropTypes from 'prop-types';

const CATEGORY = {
  WC: 'World Cup',
  CL: 'UEFA Champions League',
  BL1: 'Bundesliga',
  DED: 'Eredivisie',
  BSA: 'Campeonato Brasileiro Série A',
  PD: 'Primera Division',
  FL1: 'Ligue 1',
  ELC: 'Championship',
  PPL: 'Primeira Liga',
  EC: 'European Championship',
  SA: 'Serie A',
  PL: 'Premier League',
  CLI: 'Copa Libertadores',
};
const LeagueFilter = () => (
  <>
    <select>
      <option value="">Categories</option>
      {Object.entries(CATEGORY).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  </>
);

// LeagueFilter.propTypes = {
//   changeFilter: PropTypes.string.isRequired,
// };
export default LeagueFilter;
