export const GET_MEAL = 'GET_MEAL';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const getAll = (categories) => ({
  type: GET_ALL_CATEGORIES,
  payload: categories,
});
export const getMeal = (meal) => ({
  type: GET_MEAL,
  payload: meal,
});

export const changeFilter = (id) => ({
  type: CHANGE_FILTER,
  payload: id,
});
