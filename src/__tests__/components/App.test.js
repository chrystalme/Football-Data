import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../components/App';
import Routes from '../../components/Routes';

describe('App', () => {
  xtest('App snapshot test', () => {
    const component = render(
      <Routes>
        <App />
      </Routes>,
    );
    expect(component).toMatchSnapshot();
  });
});
