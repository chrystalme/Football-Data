import { GET_RECIPES, GET_RECIPE } from '../actions';

const initialState = {
  stocks: [],
  stock: {},
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, stocks: action.payload };
    case GET_RECIPE:
      return {
        ...state,
        stock: action.payload,
      };

    default:
      return state;
  }
};

export default stockReducer;
