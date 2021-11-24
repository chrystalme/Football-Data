import { GET_ALL_COMPETITIONS, GET_LEAGUE, GET_TEAM } from '../actions';

export const competitionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_COMPETITIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export const leagueReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LEAGUE:
      return [action.payload];
    default:
      return state;
  }
};

export const teamReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TEAM:
      return [action.payload];
    default:
      return state;
  }
};
