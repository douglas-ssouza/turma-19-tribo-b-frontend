import React from 'react';
import { findAllByRole, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';

import App from '../App';

import { CHARACTERS_FIRST } from './mocks/characters';
import { CHARACTER_1, CHARACTER_2 } from './mocks/characterDetails';

describe('Página Character Details', () => {
  it('Verifica o personagem renderizado ao clicar no primeiro link de Detalhes', async () => {
    global.fetch = jest.fn()
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(CHARACTERS_FIRST),
      })
      .mockResolvedValue({
        json: jest.fn().mockResolvedValue(CHARACTER_1),
      })
    
    const { history } = renderWithRouter(<App />);
    history.push('/characters');

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 },
    );

    const characterLinks = await screen.findAllByRole('link', { name: /detalhes/i });
    expect(characterLinks).toHaveLength(20);
    userEvent.click(characterLinks[0]);

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 },
    );

    expect(history.location.pathname).toBe('/characters/1');

    const characterName = await screen.findByRole('heading', { level: 2 });
    expect(characterName).toHaveTextContent(CHARACTER_1.name);
  });

  it('Verifica o personagem renderizado ao clicar no segundo link de Detalhes', async () => {
    global.fetch = jest.fn()
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(CHARACTERS_FIRST),
      })
      .mockResolvedValue({
        json: jest.fn().mockResolvedValue(CHARACTER_2),
      })
    
    const { history } = renderWithRouter(<App />);
    history.push('/characters');

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 },
    );

    const characterLinks = await screen.findAllByRole('link', { name: /detalhes/i });
    expect(characterLinks).toHaveLength(20);
    userEvent.click(characterLinks[1]);

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3000 },
    );

    expect(history.location.pathname).toBe('/characters/2');

    const characterName = await screen.findByRole('heading', { level: 2 });
    expect(characterName).toHaveTextContent(CHARACTER_2.name);
  });
})
