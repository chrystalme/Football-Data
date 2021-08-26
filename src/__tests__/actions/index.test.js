// eslint-disable-next-line import/extensions
import * as action from '../../actions';

const competitions = [
  {
    id: 2021,
    area: {
      id: 2072,
      name: 'England',
      countryCode: 'ENG',
      ensignUrl: 'https://crests.football-data.org/770.svg',
    },
    name: 'Premier League',
    code: 'PL',
    emblemUrl: null,
    plan: 'TIER_ONE',
    currentSeason: {
      id: 733,
      startDate: '2021-08-13',
      endDate: '2022-05-23',
      currentMatchday: 2,
      winner: null,
    },
    numberOfAvailableSeasons: 29,
    lastUpdated: '2021-04-17T02:20:14Z',
  },
];

const league = {
  count: 20,
  filters: {},
  competition: {
    id: 2021,
    area: {
      id: 2072,
      name: 'England',
    },
    name: 'Premier League',
    code: 'PL',
    plan: 'TIER_ONE',
    lastUpdated: '2021-04-17T02:20:14Z',
  },
  season: {
    id: 733,
    startDate: '2021-08-13',
    endDate: '2022-05-23',
    currentMatchday: 2,
    winner: null,
  },
  teams: [
    {
      id: 57,
      area: {
        id: 2072,
        name: 'England',
      },
      name: 'Arsenal FC',
      shortName: 'Arsenal',
      tla: 'ARS',
      crestUrl: 'https://crests.football-data.org/57.svg',
      address: '75 Drayton Park London N5 1BU',
      phone: '+44 (020) 76195003',
      website: 'http://www.arsenal.com',
      email: 'info@arsenal.co.uk',
      founded: 1886,
      clubColors: 'Red / White',
      venue: 'Emirates Stadium',
      lastUpdated: '2020-11-26T02:15:20Z',
    },
    {
      id: 58,
      area: {
        id: 2072,
        name: 'England',
      },
      name: 'Aston Villa FC',
      shortName: 'Aston Villa',
      tla: 'AST',
      crestUrl: 'https://crests.football-data.org/58.svg',
      address: 'Villa Park Birmingham B6 6HE',
      phone: '+44 (0121) 3272299',
      website: 'http://www.avfc.co.uk',
      email: null,
      founded: 1872,
      clubColors: 'Claret / Sky Blue',
      venue: 'Villa Park',
      lastUpdated: '2021-03-03T09:46:16Z',
    },
  ],
};

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
