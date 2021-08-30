import { combineReducers } from 'redux';
import { competitionsReducer, leagueReducer } from './recipes';
import filterReducer from './filter';

const rootReducer = combineReducers({
  competitions: competitionsReducer,
  league: leagueReducer,
  filter: filterReducer,
});

export default rootReducer;
