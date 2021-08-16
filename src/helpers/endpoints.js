export const recipesCategory = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export const recipeDetails = (id) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

export const searchByName = (meal) => `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

export const recipeByIngredient = (ingredient) => `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

export const apiKey = () => '765fd78f4fc8f00e79f89813b976ec9a';

export const allStocks = () => `https://financialmodelingprep.com/api/v3/stock/list?apikey=${apiKey}&LIMIT=200`;
