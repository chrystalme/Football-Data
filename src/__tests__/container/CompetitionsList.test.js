import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'react-mock-store';
import { render } from '@testing-library/react';
import CompetitionsList from '../../containers/CompetitionList';
import * as action from '../../actions';
import * as data from '../helper';

const mockStore = configureStore([]);
describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      competitions: [],
      league: [],
      filter: '',
    });
  });

  store.dispatch = jest.fn();
  // eslint-disable-next-line prefer-const
  component = renderer.create(
    <Provider store={store}>
      <CompetitionsList />
    </Provider>,
  );

  xit('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  xit('should dispatch an action on button click', () => {
    render.act(() => {
      component.root.findByType('div').props.onChange();
    });

    renderer.act(() => {
      component.root.findByType('input')
        .props.onChange({ target: { value: 'some other text' } });
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      action.getAll({ payload: data.competitions }),
    );
  });
});
