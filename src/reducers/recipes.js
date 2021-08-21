import { GET_ALL_CATEGORIES, GET_MEAL } from '../actions';

export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

export const mealReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MEAL:
      return { ...state, meal: [action.payload] };
    default:
      return state;
  }
};
