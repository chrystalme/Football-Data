// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect, useDispatch } from 'react-redux';
// import { changeFilter, getRecipes } from '../actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import fetchRecipes from '../actions/fetchRecipes';
// import Recipe from '../components/RecipeCategory';

// const RecipeList = ({
//   categories, /* fetchCategories, handleChangeFilter, filter */
// }) => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getRecipes(categories.categories));
//   }, [fetchRecipes, categories.categories.length]);
//   return (
//     <div>
//       { categories.map((category) => (<Recipe key={category.idCategory} category={category} />))}

//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   categories: state.categories,
//   filter: state.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   handleChangeFilter: (meal) => dispatch(changeFilter(meal.target.value)),
//   fetchCategories: dispatch(fetchRecipes()),
// });

// const ConnectedComponent = connect(
//   mapStateToProps, mapDispatchToProps,
// )(RecipeList);

// RecipeList.propTypes = {
//   categories: PropTypes.instanceOf(Array).isRequired,
//   // handleChangeFilter: PropTypes.func.isRequired,
//   // filter: PropTypes.string.isRequired,
// };

// export default ConnectedComponent;

import axios from 'axios';
import { getRecipes } from '../actions';
import RecipeCategory from '../components/RecipeCategory';
// import * as endpoint from '../helpers/endpoints';
import recipelist from '../style/recipelist.module.css';

const Recipe = () => {
  const stocks = useSelector((state) => state.stocks.stocks);
  const dispatch = useDispatch();
  const fetchRecipe = async () => {
    const response = await axios
      .get('https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=765fd78f4fc8f00e79f89813b976ec9a')
      .catch((err) => {
        throw err;
      });
    dispatch(getRecipes(response.data));
  };
  useEffect(() => {
    fetchRecipe();
  }, []);
  return (
    <div className={recipelist.container}>

      {
       stocks.map((stock) => (
         <RecipeCategory key={stock.symbol} stock={stock} />
       ))
     }
    </div>
  );
};

export default Recipe;
