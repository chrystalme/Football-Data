import { combineReducers } from 'redux';
import { competitionsReducer, leagueReducer, teamReducer } from './recipes';
import filterReducer from './filter';

const rootReducer = combineReducers({
  competitions: competitionsReducer,
  league: leagueReducer,
  filter: filterReducer,
  team: teamReducer,
});

export default rootReducer;
