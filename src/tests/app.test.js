import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import Login from '../pages/Login';

const EMAIL = 'email@email.com';
const PASSWORD = '123456';

describe('Página de Login', () => {
  it('Verifica se contém os componentes corretos', () => {
    render(<Login />);
    
    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite sua senha');
    const loginButton = screen.getByRole('button');

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveProperty('type', 'email');

    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveProperty('type', 'password');

    expect(loginButton).toBeInTheDocument();
  });

  it('Verifica valores iniciais dos campos de input', () => {
    render(<Login />);
    
    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite sua senha');

    expect(emailInput).toHaveValue('');
    expect(passwordInput).toHaveValue('');
  });

  it('Verifica se botão inicia desabilitado', () => {
    render(<Login />);

    const loginButton = screen.getByRole('button');

    expect(loginButton).toBeDisabled();
  });

  it('Verifica se é possível alterar o valor dos campos de input', () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite sua senha');

    userEvent.type(emailInput, EMAIL);
    userEvent.type(passwordInput, PASSWORD);

    expect(emailInput).toHaveValue(EMAIL);
    expect(passwordInput).toHaveValue(PASSWORD);
  });

  it('Verifica se botão torna-se habilitado apenas se campos de email e senha estiverem preenchidos', () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite sua senha');
    const loginButton = screen.getByRole('button');

    expect(loginButton).toBeDisabled();

    userEvent.type(emailInput, EMAIL);
    userEvent.type(passwordInput, PASSWORD);

    expect(loginButton).toBeEnabled();

    userEvent.clear(emailInput);
    userEvent.clear(passwordInput);

    expect(loginButton).toBeDisabled();
  });
});

describe('Página Characters', () => {
  it('Verifica o número de personagens renderizados', async () => {
    render(<App />);

    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite sua senha');
    const loginButton = screen.getByRole('button');

    userEvent.type(emailInput, EMAIL);
    userEvent.type(passwordInput, PASSWORD);
    userEvent.click(loginButton);

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 }
    );

    const containers = await screen.findAllByTestId('character-container');
    expect(containers).toHaveLength(20);
  });
})


