import { competitionsReducer, leagueReducer } from '../../reducers/recipes';
import { getAll, getLeague } from '../../actions/index';
import * as data from '../helper';

const initialState = {
  competitions: [],
  league: [],
};

describe('Competitions Reducer', () => {
  it('Should return the default state of competitions', () => {
    const state = competitionsReducer(undefined, []);
    expect(state).toStrictEqual(initialState.competitions);
  });

  it('Should return new state of competitions', () => {
    const action = getAll(data.competitions);
    const state = competitionsReducer(undefined, action);

    expect(state).toEqual([...data.competitions]);
  });
});

describe('League Reducer', () => {
  it('Should return the default state of league', () => {
    const state = leagueReducer(undefined, []);
    expect(state).toEqual(initialState.league);
  });

  it('Should return new state of league', () => {
    const action = getLeague(data.league);
    const state = leagueReducer(undefined, action);

    expect(state).toEqual([data.league]);
  });
});
