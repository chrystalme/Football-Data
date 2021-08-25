export const GET_LEAGUE = 'GET_LEAGUE';
export const GET_ALL_COMPETITIONS = 'GET_ALL_COMPETITIONS';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const getAll = (categories) => ({
  type: GET_ALL_COMPETITIONS,
  payload: categories,
});
export const getLeague = (league) => ({
  type: GET_LEAGUE,
  payload: league,
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});
