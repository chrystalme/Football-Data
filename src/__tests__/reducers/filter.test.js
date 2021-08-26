import filterReducer from '../../reducers/filter';
import { changeFilter } from '../../actions';

describe('Filter Reducer', () => {
  it('Should return filter default state', () => {
    const state = filterReducer(undefined, []);
    expect(state).toEqual('');
  });

  it('Should return a new state if a valid filter is provided', () => {
    const action = changeFilter('name');
    const state = filterReducer(undefined, action);

    expect(state).toEqual('name');
  });
});
