import axios from 'axios';
import { getRecipes } from '.';
import { recipeByIngredient } from '../helpers/endpoints';

const searchRecipe = (ingredient) => (dispatch) => {
  const url = recipeByIngredient(ingredient);

  axios.get(url)
    .then((res) => {
      const { data } = res;
      dispatch(getRecipes(data));
    })
    .catch((e) => {
      throw e;
    });
};

export default searchRecipe;
