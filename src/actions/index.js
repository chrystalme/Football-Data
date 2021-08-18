export const GET_RECIPE = 'GET_RECIPE';
export const GET_RECIPES = 'GET_RECIPES';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const getRecipes = (stocks) => ({
  type: GET_RECIPES,
  payload: stocks,
});
export const getRecipe = (symbol) => ({
  type: GET_RECIPE,
  payload: symbol,
});

export const changeFilter = (id) => ({
  type: CHANGE_FILTER,
  payload: id,
});
