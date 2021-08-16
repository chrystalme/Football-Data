import axios from 'axios';
import { getRecipe } from '.';
import { recipeDetails } from '../helpers/endpoints';

const fetchRecipe = (id) => (dispatch) => {
  const url = recipeDetails(id);

  axios.get(url)
    .then((res) => {
      const { data } = res;
      dispatch(getRecipe(data));
      console.log(data);
    })
    .catch((e) => {
      throw e;
    });
};

export default fetchRecipe;
