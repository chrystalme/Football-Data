import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Routes from '../../components/routes';
import store from '../../store';
import Competition from '../../components/Competition';

const competitions = {
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
};

describe('Competition', () => {
  test('Competition component is rendered correctly', () => {
    const component = render(
      <Provider store={store}>
        <Routes>
          <Competition competition={competitions} />
          ,
        </Routes>
        ,
      </Provider>,

    );
    expect(component).toMatchSnapshot();
  });
});
