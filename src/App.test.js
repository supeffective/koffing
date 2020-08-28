import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';

test('renders the prettify button', () => {
  const { getByText } = render(<App />);
  const testedElement = getByText(/Prettify/i);
  expect(testedElement).toBeInTheDocument();
});
