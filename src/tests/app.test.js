import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

test('Verifica número de container de personagens', () => {
  render(<App />);

  const emailInput = screen.getByTestId('input-email');
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveProperty('type', 'email');
});
