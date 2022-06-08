import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App';

test('renders Input Components', () => {
  const { getByTestId } = render(<App />);
    const button = getByTestId("input-container");
    expect(button).toBeInTheDocument();
});
