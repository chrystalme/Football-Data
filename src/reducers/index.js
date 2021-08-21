import { combineReducers } from 'redux';
import { categoriesReducer, mealReducer } from './recipes';
import filterReducer from './filter';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  meal: mealReducer,
  filter: filterReducer,
});

export default rootReducer;
