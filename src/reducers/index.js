import { combineReducers } from 'redux';
import stockReducer from './recipes';
import filterReducer from './filter';

const rootReducer = combineReducers({
  stocks: stockReducer,
  filter: filterReducer,
});

export default rootReducer;
