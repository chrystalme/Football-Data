import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import App from '../../components/App';
import Routes from '../../components/Routes';
import store from '../../store';

describe('App', () => {
  test('App snapshot test', () => {
    const component = render(
      <Provider store={store}>
        <Routes>
          <App />
        </Routes>
        ,
      </Provider>,

    );
    expect(component).toMatchSnapshot();
  });
});
