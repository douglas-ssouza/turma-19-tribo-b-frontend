import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

const RESPONSE = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Naja",
        "last": "Johansen"
      },
      "location": {
        "street": {
          "number": 3980,
          "name": "Ridderhatten"
        },
        "city": "Saltum",
        "state": "Midtjylland",
        "country": "Denmark",
        "postcode": 15105,
        "coordinates": {
          "latitude": "-34.2801",
          "longitude": "19.3519"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "naja.johansen@example.com",
      "login": {
        "uuid": "b46e6ab5-0975-4394-a725-ebafd4543f43",
        "username": "goldenswan751",
        "password": "bond007",
        "salt": "LDvpJt6C",
        "md5": "b64839b7b9a0993da2300c3c37cf1389",
        "sha1": "e10fbd1200c2ea0f349646086379d51ccc5200b7",
        "sha256": "08c2d137e408fb820cab18ff7525c898ef2df7ba94906f84380d156fa058fa2f"
      },
      "dob": {
        "date": "1980-09-19T08:36:23.216Z",
        "age": 42
      },
      "registered": {
        "date": "2019-05-01T14:58:57.234Z",
        "age": 3
      },
      "phone": "23219228",
      "cell": "58804727",
      "id": {
        "name": "CPR",
        "value": "190980-8952"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/79.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/79.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/79.jpg"
      },
      "nat": "DK"
    }
  ],
  "info": {
    "seed": "cbd1a3fae368f81d",
    "results": 1,
    "page": 1,
    "version": "1.3"
  }
};

test('Verifica se o nome e idade foram renderizados corretamente', async () => {
  global.fetch = jest.fn(async () => ({
    json: async () => RESPONSE,
  }));

  render(<App />);
  
  const name = await screen.findByText(/Naja Johansen/i);
  expect(name).toBeInTheDocument();
});
