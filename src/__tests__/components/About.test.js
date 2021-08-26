import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
// import Routes from '../../components/Routes';
import About from '../../components/About';

describe('About', () => {
  xtest('About component is rendered correctly', () => {
    const component = render(
      // <Routes></Routes>,
      <About />,
    );
    expect(component).toMatchSnapshot();
  });

  xtest('Text match About page test', () => {
    const { getByText } = render(<About />);
    const text = getByText('Football');
    expect(text).toBeInTheDocument();
  });
});
