import axios from 'axios';
import { getRecipes } from '.';
import { recipesCategory } from '../helpers/endpoints';

const fetchRecipes = () => (dispatch) => {
  axios.get(recipesCategory)
    .then((res) => {
      const { data } = res;
      dispatch(getRecipes(data));
      console.log(data);
    })
    .catch((e) => { throw e; });
};

export default fetchRecipes;
