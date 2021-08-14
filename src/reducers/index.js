import { combineReducers } from 'redux';
import { recipeReducer, selectedRecipeReducer } from './recipes';
import filterReducer from './filter';

const rootReducer = combineReducers({
  recipe: recipeReducer,
  selectedRecipe: selectedRecipeReducer,
  filter: filterReducer,
});

export default rootReducer;
