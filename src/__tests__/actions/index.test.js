// eslint-disable-next-line import/extensions
import * as action from '../../actions';
import { competitions, league } from '../helper';

describe('Get competitions', () => {
  it('Should return an object containing competitions', () => {
    const res = action.getAll(competitions);

    expect(res.type).toEqual('GET_ALL_COMPETITIONS');
    expect(res.payload).toEqual(competitions);
  });
});
describe('Get leagues', () => {
  it('Should return an object containing leagues', () => {
    const res = action.getLeague(league);

    expect(res.type).toEqual('GET_LEAGUE');
    expect(res.payload).toEqual(league);
  });
});
describe('Change filter', () => {
  it('Should return an object containing search', () => {
    const res = action.changeFilter('name');

    expect(res.type).toEqual('CHANGE_FILTER');
    expect(res.payload).toEqual('name');
  });
});
