export const GET_RECIPE = 'GET_RECIPE';
export const GET_RECIPES = 'GET_RECIPES';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const getRecipes = (recipes) => ({
  type: GET_RECIPES,
  payload: recipes,
});
export const getRecipe = (recipe) => ({
  type: GET_RECIPE,
  payload: recipe,
});

export const changeFilter = (name) => ({
  type: CHANGE_FILTER,
  payload: name,
});
