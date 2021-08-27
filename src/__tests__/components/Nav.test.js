import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Routes from '../../components/Routes';
import store from '../../store';
import Nav from '../../components/Nav';

describe('Nav', () => {
  test('nav component is rendered correctly', () => {
    const component = render(
      <Provider store={store}>
        <Routes>
          <Nav />
          ,
        </Routes>
        ,
      </Provider>,

    );
    expect(component).toMatchSnapshot();
  });

  test('nav has About', () => {
    render(
      <Provider store={store}>
        <Routes>
          <Nav />
        </Routes>
        ,
      </Provider>,

    );
    const anchorElement = screen.getByText(/About/i);
    expect(anchorElement).toBeInTheDocument();
  });
});
