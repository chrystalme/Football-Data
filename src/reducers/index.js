import { combineReducers } from 'redux';
import { leagueReducer, competitionReducer } from './recipes';
import filterReducer from './filter';

const rootReducer = combineReducers({
  leagueReducer,
  competitionReducer,
  filterReducer,
});

export default rootReducer;
