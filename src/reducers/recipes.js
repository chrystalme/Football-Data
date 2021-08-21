import { GET_ALL_COMPETITIONS, GET_LEAGUE } from '../actions';

export const leagueReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LEAGUE:
      return { ...state, league: [action.payload] };
    default:
      return state;
  }
};

export const competitionReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_COMPETITIONS:
      return { ...state, competitions: [action.payload] };
    default:
      return state;
  }
};
