import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './components/Routes';
import rootReducer from './reducers';

const initialState = {
  categories: [
    {
      idCategory: '1',
      strCategory: 'Beef',
      strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
      strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
    },
    {
      idCategory: '2',
      strCategory: 'Chicken',
      strCategoryThumb: 'https://www.themealdb.com/images/category/chicken.png',
      strCategoryDescription: 'Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.',
    },
    {
      idCategory: '3',
      strCategory: 'Dessert',
      strCategoryThumb: 'https://www.themealdb.com/images/category/dessert.png',
      strCategoryDescription: 'Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.',
    },
  ],
  meal: [
    {
      idMeal: '52881',
      strMeal: 'Steak and Kidney Pie',
      strDrinkAlternate: null,
      strCategory: 'Beef',
      strArea: 'British',
      strInstructions: 'Preheat the oven to 220C/425F/Gas 7\r\nHeat the vegetable oil in a large frying pan, and brown the beef all over. (You may need to do this in batches.) Set aside, then brown the kidneys on both sides in the same pan. Add the onions and cook for 3-4 minutes.\r\nReturn the beef to the pan, sprinkle flour over and coat the meat and onions\r\nAdd the stock to the pan, stir well and bring to the boil.\r\nTurn the heat down and simmer for 1½ hours without a lid. If the liquid evaporates too much, add more stock.\r\nRemove from the heat. Add salt, pepper and Worcestershire sauce and allow to cool completely. Place the cooked meat mixture into a pie dish.\r\nRoll out the pastry to 5mm/¼in thick and 5cm/2in larger than the dish you are using.\r\nUsing a rolling pin, lift the pastry and place it over the top of the pie dish. Trim and crimp the edges with your fingers and thumb.\r\nBrush the surface with the beaten egg mixture and bake for 30-40 minutes until golden-brown and puffed.\r\nServe with creamy mash and steamed vegetables to soak up the gravy.',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/qysyss1511558054.jpg',
      strTags: 'Pie',
      strYoutube: 'https://www.youtube.com/watch?v=oTw5tPt4KmA',
      strIngredient1: 'Puff Pastry',
      strIngredient2: 'Egg White',
      strIngredient3: 'Egg Yolks',
      strIngredient4: 'Vegetable Oil',
      strIngredient5: 'Beef',
      strIngredient6: 'Lamb Kidney',
      strIngredient7: 'Onions',
      strIngredient8: 'Plain Flour',
      strIngredient9: 'Beef Stock',
      strIngredient10: 'Salt',
      strIngredient11: 'Pepper',
      strIngredient12: 'Worcestershire Sauce',
      strIngredient13: null,
      strIngredient14: '',
      strIngredient15: '',
      strIngredient16: '',
      strIngredient17: '',
      strIngredient18: '',
      strIngredient19: '',
      strIngredient20: '',
      strMeasure1: '300g',
      strMeasure2: 'Beaten',
      strMeasure3: 'Beaten',
      strMeasure4: '2 tbs',
      strMeasure5: '70 ml ',
      strMeasure6: '200g',
      strMeasure7: '2 chopped',
      strMeasure8: '30g',
      strMeasure9: '85 ml ',
      strMeasure10: 'pinch',
      strMeasure11: 'pinch',
      strMeasure12: 'Dash',
      strMeasure13: '',
      strMeasure14: '',
      strMeasure15: '',
      strMeasure16: '',
      strMeasure17: '',
      strMeasure18: '',
      strMeasure19: '',
      strMeasure20: '',
      strSource: 'https://www.bbc.co.uk/food/recipes/steakandkidneypie_73308',
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
  ],
  filter: '',
};

const store = createStore(rootReducer, initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
