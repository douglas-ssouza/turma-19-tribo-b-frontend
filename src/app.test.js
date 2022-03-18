import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

const RESPONSE_1 = {
  success: true,
  deck_id: 'svtuifsfjazc',
  cards: [
    {
      code: 'AS',
      image: 'https://deckofcardsapi.com/static/img/AS.png',
      images: {
        svg: 'https://deckofcardsapi.com/static/img/AS.svg',
        png: 'https://deckofcardsapi.com/static/img/AS.png',
      },
      value: 'ACE',
      suit: 'SPADES',
    }
  ],
  remaining: 51
}

const RESPONSE_2 = {
  "success": true,
  "deck_id": "dfaxklf47jaa",
  "cards": [
    {
      "code": "9D",
      "image": "https://deckofcardsapi.com/static/img/9D.png",
      "images": {
        "svg": "https://deckofcardsapi.com/static/img/9D.svg",
        "png": "https://deckofcardsapi.com/static/img/9D.png"
      },
      "value": "9",
      "suit": "DIAMONDS"
    }
  ],
  "remaining": 51
}

describe('Verifica elementos ao iniciar a página', () => {
  it('Verifica nome da carta', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => RESPONSE_1,
    }));

    render(<App />);

    const cardName = await screen.findByText('ACE OF SPADES');
    expect(cardName).toBeInTheDocument();
  });

  it('Verificar se o botão está na tela', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => RESPONSE_1,
    }));

    render(<App />);

    const button = await screen.findByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('Verifica a imagem renderizada', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => RESPONSE_1,
    }));

    render(<App />);

    const image = await screen.findByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty('src', 'https://deckofcardsapi.com/static/img/AS.png');
  });
});

describe('Verifica os elementos após clicar no botão', () => {
  it('Verifica se a carta renderizada é diferente', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => RESPONSE_1,
    }));

    render(<App />);

    const cardName = await screen.findByRole('heading');
    const button = await screen.findByRole('button');
    
    expect(cardName).toBeInTheDocument();
    expect(cardName).toHaveTextContent('ACE OF SPADES');
    
    global.fetch.mockReset();

    global.fetch = jest.fn(async () => ({
      json: async () => RESPONSE_2,
    }));
    
    userEvent.click(button);

    const cardName2 = await screen.findByRole('heading');
    expect(cardName2).not.toHaveTextContent('ACE OF SPADES');
  });
});
