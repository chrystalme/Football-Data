export const recipesCategory = 'www.themealdb.com/api/json/v1/1/categories.php';

export const recipeDetails = (id) => `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

export const searchByName = (meal) => `www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

export const recipeByIngredient = (ingredient) => `www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

export const apiKey = () => '765fd78f4fc8f00e79f89813b976ec9a';
