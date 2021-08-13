import { GET_RECIPES, GET_RECIPE } from '../actions';

const initialState = {
  recipes: [],
  recipe: {},
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      };
    case GET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload],
      };

    default:
      return state;
  }
};

export default recipeReducer;
