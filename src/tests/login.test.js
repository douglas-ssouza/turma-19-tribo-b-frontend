import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';

import App from '../App';

test('Deve renderizar a paágina de Login', () => {
  renderWithRouter(<App />);

  const emailInput = screen.getByTestId('email-input');
  const passwordInput = screen.getByTestId('password-input');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});