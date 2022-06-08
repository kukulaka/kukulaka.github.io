import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App';

test('renders Input Components', () => {
  const { getByTestId } = render(<App />);
    const input = getByTestId("input-container");
    expect(input).toBeInTheDocument();
});
