import React from 'react';

import useDigimon from './hooks/useDigimons';

function App() {
  const [digimons, getNewDigimons] = useDigimon();

  return (
    <>
      <header>
        <ul>
          <li
            onClick={ () => getNewDigimons('https://digimon-api.herokuapp.com/api/digimon/level/intraining') }
          >
            In Training
          </li>
          <li
            onClick={ () => getNewDigimons('https://digimon-api.herokuapp.com/api/digimon/level/rookie') }
          >
            Rookie
          </li>
          <li
            onClick={ () => getNewDigimons('https://digimon-api.herokuapp.com/api/digimon/level/champion') }
          >
            Champion
          </li>
          <li
            onClick={ () => getNewDigimons('https://digimon-api.herokuapp.com/api/digimon/level/ultimate') }
          >
            Ultimate
          </li>
          <li
            onClick={ () => getNewDigimons('https://digimon-api.herokuapp.com/api/digimon/level/mega') }
          >
            Mega
          </li>
        </ul>
      </header>
      {
        digimons && digimons.map(({ name, img }) => (
          <div>
            <h3>{ name }</h3>
            <img src={ img } alt={ name } />
          </div>
        ))
      }
    </>
  );
}

export default App;
