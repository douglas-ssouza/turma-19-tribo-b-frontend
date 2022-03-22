import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';

import App from '../App';

describe('Página de Login', () => {
  it('Deve ter um campo de email e um campo de senha e um botão', () => {
    renderWithRouter(<App />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginButton = screen.getByRole('button');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('Deve renderizar a página Characters ao clicar no botão', () => {
    const { history } = renderWithRouter(<App />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginButton = screen.getByRole('button');

    userEvent.type(emailInput, 'email@email.com');
    userEvent.type(passwordInput, '123456');
    userEvent.click(loginButton);

    const { pathname } = history.location;
    expect(pathname).toBe('/characters');
  });
});

