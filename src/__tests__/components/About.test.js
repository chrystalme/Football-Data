import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Routes from 'components/Routes';
import About from 'components/About';

describe('About', () => {
  test('About component is rendered correctly', () => {
    const component = render(
      <Routes><About /></Routes>,
    );
    expect(component).toMatchSnapshot();
  });
});
