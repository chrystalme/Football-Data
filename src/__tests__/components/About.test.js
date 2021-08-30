import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Routes from '../../components/Routes';
import About from '../../components/About';
import store from '../../store';

describe('About', () => {
  test('About component is rendered correctly', () => {
    const component = render(
      <Provider store={store}>
        <Routes>
          <About />
          ,
        </Routes>
        ,
      </Provider>,

    );
    expect(component).toMatchSnapshot();
  });

  test('About has Football', () => {
    render(
      <Provider store={store}>
        <Routes>
          <About />
        </Routes>
        ,
      </Provider>,

    );
    const paragraphElement = screen.getByText(/FootBallData/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});
