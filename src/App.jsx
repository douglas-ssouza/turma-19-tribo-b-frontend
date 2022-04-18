import React from 'react';

import useDigimon from './hooks/useDigimon';

function App() {
  const [digimons, level, setLevel] = useDigimon();

  return (
    <>
      <h1>Digimon</h1>
      <section>
        <button type="button" onClick={ () => setLevel('') }>All</button>
        <button type="button" onClick={ () => setLevel('intraining') }>In Training</button>
        <button type="button" onClick={ () => setLevel('rookie') }>Rookie</button>
        <button type="button" onClick={ () => setLevel('champion') }>Champion</button>
        <button type="button" onClick={ () => setLevel('ultimate')  }>Ultimate</button>
        <button type="button" onClick={ () => setLevel('mega') }>Mega</button>
      </section>
      <section>
        <h2>{ level ? level : 'All' }</h2>
        {
          digimons && digimons.map(({ name, img }) => (
            <div key={ name }>
              <h4>{ name }</h4>
              <img src={ img } alt={ name } />
            </div>
          ))
        }
      </section>
    </>
  );
}

export default App;
