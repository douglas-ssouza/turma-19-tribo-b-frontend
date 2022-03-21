import React from 'react';
import { findAllByTestId, findByText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

import { CHARACTERS_PAGE_1, CHARACTERS_PAGE_2, CHARACTERS_PAGE_42 } from './mocks/characterMock';

const EMAIL = 'email@email.com';
const PASSWORD = '123456';

describe('Página de Login', () => {
  it('Verifica se contém os componentes corretos', () => {
    render(<App />);
    
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
    render(<App />);
    
    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite sua senha');

    expect(emailInput).toHaveValue('');
    expect(passwordInput).toHaveValue('');
  });

  it('Verifica se botão inicia desabilitado', () => {
    render(<App />);

    const loginButton = screen.getByRole('button');

    expect(loginButton).toBeDisabled();
  });

  it('Verifica se é possível alterar o valor dos campos de input', () => {
    render(<App />);

    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite sua senha');

    userEvent.type(emailInput, EMAIL);
    userEvent.type(passwordInput, PASSWORD);

    expect(emailInput).toHaveValue(EMAIL);
    expect(passwordInput).toHaveValue(PASSWORD);
  });

  it('Verifica se botão torna-se habilitado apenas se campos de email e senha estiverem preenchidos', () => {
    render(<App />);

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
  it('Verifica se a página possui os links do header', async () => {
    render(<App />);

    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite sua senha');
    const loginButton = screen.getByRole('button');

    userEvent.type(emailInput, EMAIL);
    userEvent.type(passwordInput, PASSWORD);
    userEvent.click(loginButton);

    const charactersLink = await screen.findByTestId('characters-link');
    const episodesLink = await screen.findByTestId('episodes-link');
    const aboutLink = await screen.findByTestId('about-link');

    expect(charactersLink).toBeInTheDocument();
    expect(charactersLink).toHaveTextContent('Characters');
    
    expect(episodesLink).toBeInTheDocument();
    expect(episodesLink).toHaveTextContent('Episode');
    
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveTextContent('About');
  });

  it('Verifica o número de personagens renderizados', async () => {
    render(<App />);

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 }
    );

    const containers = await screen.findAllByTestId('character-container');
    expect(containers).toHaveLength(20);
  });

  it('Verifica o nome e imagem dos personagens renderizados', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => CHARACTERS_PAGE_1,
    }));

    const mockNames = CHARACTERS_PAGE_1.results.map(({ name }) => name);
    const mockImages = CHARACTERS_PAGE_1.results.map(({ image }) => image);
    
    render(<App />);

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 }
    );

    const names = await screen.findAllByRole('heading', { level: 2 });
    const images = await screen.findAllByRole('img');

    names.forEach((name, index) => {
      expect(name).toHaveTextContent(mockNames[index]);
    });
    
    images.forEach((image, index) => {
      expect(image).toHaveProperty('src', mockImages[index]);
    });
  });

  it('Verifica se todos os containers possuem um link de Detalhes', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => CHARACTERS_PAGE_1,
    }));
    
    render(<App />);

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 }
    );

    const containerLinks = await screen.findAllByTestId('details-link');
    expect(containerLinks).toHaveLength(20);
  });

  it('Verifica se outros personagens são renderizados ao clicar no botão next', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => CHARACTERS_PAGE_1,
    }));
    
    render(<App />);

    const nextButton = await screen.findByText('Next');
    expect(nextButton).toBeInTheDocument();

    global.fetch.mockRestore();
    global.fetch = jest.fn(async () => ({
      json: async () => CHARACTERS_PAGE_2,
    }));

    const mockNames = CHARACTERS_PAGE_2.results.map(({ name }) => name);
    const mockImages = CHARACTERS_PAGE_2.results.map(({ image }) => image);

    userEvent.click(nextButton);

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 }
    );

    const names = await screen.findAllByRole('heading', { level: 2 });
    const images = await screen.findAllByRole('img');

    names.forEach((name, index) => {
      expect(name).toBeInTheDocument();
      expect(name).toHaveTextContent(mockNames[index]);
    });

    images.forEach((image, index) => {
      expect(image).toBeInTheDocument();
      expect(image).toHaveProperty('src', mockImages[index]);
    });
  });;

  it('Verifica se outros personagens são renderizados ao clicar no botão previous', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => CHARACTERS_PAGE_1,
    }));
    
    render(<App />);

    const prevButton = await screen.findByText('Previous');
    expect(prevButton).toBeInTheDocument();

    global.fetch.mockRestore();
    global.fetch = jest.fn(async () => ({
      json: async () => CHARACTERS_PAGE_42,
    }));

    const mockNames = CHARACTERS_PAGE_42.results.map(({ name }) => name);
    const mockImages = CHARACTERS_PAGE_42.results.map(({ image }) => image);

    userEvent.click(prevButton);

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 }
    );

    const names = await screen.findAllByRole('heading', { level: 2 });
    const images = await screen.findAllByRole('img');

    names.forEach((name, index) => {
      expect(name).toBeInTheDocument();
      expect(name).toHaveTextContent(mockNames[index]);
    });

    images.forEach((image, index) => {
      expect(image).toBeInTheDocument();
      expect(image).toHaveProperty('src', mockImages[index]);
    });
  });

  it('Verifica se faz a chamado do fetch com os endpoints corretos ao clicar no botão next', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => CHARACTERS_PAGE_1,
    }));
    
    render(<App />);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character');

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 }
    );

    const nextButton = await screen.findByText('Next');

    userEvent.click(nextButton);
    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character?page=2');
  });

  it('Verifica se faz a chamado do fetch com os endpoints corretos ao clicar no botão previous', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => CHARACTERS_PAGE_1,
    }));
    
    render(<App />);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character');

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 }
    );

    const prevButton = await screen.findByText('Previous');

    userEvent.click(prevButton);
    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character?page=42');
  });
});
