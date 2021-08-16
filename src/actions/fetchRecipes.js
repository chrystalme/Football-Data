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

// import axios from 'axios';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getRecipes } from '../actions';
// import * as endpoint from '../helpers/endpoints';

// const Recipe = () => {
//   const recipes = useSelector((state) => state.recipe.recipes);
//   const dispatch = useDispatch();
//   const fetchRecipe = async () => {
//     const response = await axios
//       .get(endpoint.recipesCategory)
//       .catch((err) => {
//         console.log(err);
//       });
//     dispatch(getRecipes(response.data));
//   };
//   useEffect(() => {
//     fetchRecipe();
//   }, []);
//   console.log(recipes);
//   return (
//     <div>
//       This is the component render
//     </div>
//   );
// };

// export default Recipe;
