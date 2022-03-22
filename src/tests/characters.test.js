import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';

import App from '../App';

import { CHARACTERS_FIRST, CHARACTERS_SECOND, CHARACTERS_LAST } from './mocks/characters';

describe('Página Characters', () => {
  it('Deve ter um título', () => {
    const { history} = renderWithRouter(<App />);
    history.push('/characters');
    const title = screen.getByRole('heading', { level: 1, name: 'Rick and Morty' });
    expect(title).toBeInTheDocument();
  });

  it('Deve renderizar 20 personagens', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(CHARACTERS_FIRST),
    });

    const { history } = renderWithRouter(<App />);
    history.push('/characters');

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 },
    );

    const containers = await screen.findAllByTestId('character-container');

    expect(containers).toHaveLength(20);
  });

  it('Verifica o nome a imagem dos personagens renderizados', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(CHARACTERS_FIRST),
    });

    const { history } = renderWithRouter(<App />);
    history.push('/characters');

    const mockedNames = CHARACTERS_FIRST.results.map(({ name }) => name);
    const mockedImages = CHARACTERS_FIRST.results.map(({ image }) => image);

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 },
    );

    const names = await screen.findAllByTestId('character-name');
    const images = await screen.findAllByTestId('character-image');

    names.forEach((name, index) => {
      expect(name).toHaveTextContent(mockedNames[index]);
    });

    images.forEach((image, index) => {
      expect(image).toHaveProperty('src', mockedImages[index]);
    });
  });

  it('Verifica se renderiza novos personagens ao clicar no botão next', async () => {
    global.fetch = jest.fn()
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(CHARACTERS_FIRST),
      })
      .mockResolvedValue({
        json: jest.fn().mockResolvedValue(CHARACTERS_SECOND),
      });

      const { history } = renderWithRouter(<App />);
    history.push('/characters');

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 },
    );

    const nextButton = await screen.findByRole('button', { name: /next/i });
    expect(nextButton).toBeInTheDocument();

    userEvent.click(nextButton);

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 },
    );

    const mockedNamesFirst = CHARACTERS_FIRST.results.map(({ name }) => name);
    const mockedImagesFirst = CHARACTERS_FIRST.results.map(({ image }) => image);

    const mockedNamesSecond = CHARACTERS_SECOND.results.map(({ name }) => name);
    const mockedImagesSecond = CHARACTERS_SECOND.results.map(({ image }) => image);

    const names = await screen.findAllByTestId('character-name');
    const images = await screen.findAllByTestId('character-image');

    expect(names).toHaveLength(20);
    expect(images).toHaveLength(20);

    names.forEach((name, index) => {
      expect(name).not.toHaveTextContent(mockedNamesFirst[index]);
      expect(name).toHaveTextContent(mockedNamesSecond[index])
    });

    images.forEach((image, index) => {
      expect(image).not.toHaveProperty(mockedImagesFirst[index]);
      expect(image).toHaveProperty('src', mockedImagesSecond[index])
    });
  });

  it('Verifica se renderiza novos personagens ao clicar no botão previous', async () => {
    global.fetch = jest.fn()
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(CHARACTERS_FIRST),
      })
      .mockResolvedValue({
        json: jest.fn().mockResolvedValue(CHARACTERS_LAST),
      });

      const { history } = renderWithRouter(<App />);
    history.push('/characters');

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 },
    );

    const prevButton = await screen.findByRole('button', { name: /previous/i });
    expect(prevButton).toBeInTheDocument();

    userEvent.click(prevButton);

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 },
    );

    const mockedNamesFirst = CHARACTERS_FIRST.results.map(({ name }) => name);
    const mockedImagesFirst = CHARACTERS_FIRST.results.map(({ image }) => image);

    const mockedNamesLast = CHARACTERS_LAST.results.map(({ name }) => name);
    const mockedImagesLast = CHARACTERS_LAST.results.map(({ image }) => image);

    const names = await screen.findAllByTestId('character-name');
    const images = await screen.findAllByTestId('character-image');

    expect(names).toHaveLength(6);
    expect(images).toHaveLength(6);

    names.forEach((name, index) => {
      expect(name).not.toHaveTextContent(mockedNamesFirst[index]);
      expect(name).toHaveTextContent(mockedNamesLast[index])
    });

    images.forEach((image, index) => {
      expect(image).not.toHaveProperty(mockedImagesFirst[index]);
      expect(image).toHaveProperty('src', mockedImagesLast[index])
    });
  });
});