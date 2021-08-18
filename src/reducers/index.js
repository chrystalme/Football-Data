import { combineReducers } from 'redux';
import stockReducer from './recipes';
import filterReducer from './filter';

const rootReducer = combineReducers({
  stockReducer,
  filterReducer,
});

export default rootReducer;
