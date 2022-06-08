import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/atoms/Button';

test('Button Compoment Tests', () => {
  const mockCallBackClick = jest.fn();
  const { getByTestId } = render(
    <Button label="Search" onClick={mockCallBackClick} />
  );
  const button = getByTestId('button-needed');
  expect(button).toBeInTheDocument();
});

test('Click button', () => {
  const mockCallBackClick = jest.fn();
  const { getByTestId } = render(
    <Button label="Search" onClick={mockCallBackClick} />
  );

  const button = getByTestId('button-needed');
  fireEvent.click(button);
});
