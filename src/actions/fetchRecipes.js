import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getRecipes } from '.';
import * as endpoint from '../helpers/endpoints';

const fetchRecipes = async () => {
  const dispatch = useDispatch();
  const response = await axios
    .get(endpoint.recipesCategory)
    .catch((err) => {
      console.log(err);
    });
  dispatch(getRecipes(response.data));
};

export default fetchRecipes;
