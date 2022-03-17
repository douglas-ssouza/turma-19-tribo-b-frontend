import React from 'react';
import { getByPlaceholderText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

test('Verifica se input foi renderizado', () => {
  render(<App />);

  const input = screen.getByRole('textbox');

  expect(input).toBeInTheDocument();
  expect(input).toHaveProperty('type', 'text');
  expect(input).toHaveProperty('placeholder', 'Digite o nome do pokemon');
});

test('Verifica o número de pokemons ao renderizar a página', () => {
  // Renderizar a página
  render(<App />);

  // Captura os elementos
  const pokemonDivs = screen.getAllByTestId('pokemon-container');

  // Fazer as asserções
  expect(pokemonDivs).toHaveLength(9);
});

describe('Testa os filtros', () => {
  it('Verifica filtro no campo input', () => {
    // renderizar a página
    render(<App />);
  
    // captura os elementos
    const input = screen.getByPlaceholderText(/Digite o nome do pokemon/i);
    
    // simula a interação da pessoa
    userEvent.type(input, 'p');
  
    // verifica os eventos 
    const pokemonContainers = screen.getAllByTestId('pokemon-container');
    expect(pokemonContainers).toHaveLength(3);
  });

  it('Verifica o nome dos pokemons filtrados', () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Digite o nome do pokemon/i);

    userEvent.type(input, 'p');
  
    const pokemonNames = screen.getAllByRole('heading', {
      level: 2,
    });
    const names = ['Pikachu', 'Caterpie', 'Rapidash'];

    pokemonNames.forEach((pokemon, index) => {
      expect(pokemon).toHaveTextContent(names[index]);
    });
  });

  it('Verifica quantidade de pokemons ao limpar o input', () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Digite o nome do pokemon/i);

    userEvent.type(input, 'char');
    const pokemonContainers1 = screen.getAllByTestId('pokemon-container');
    expect(pokemonContainers1).toHaveLength(1);

    userEvent.clear(input);
    const pokemonContainers2 = screen.getAllByTestId('pokemon-container');
    expect(pokemonContainers2).toHaveLength(9);
  });
});


