import React, { useContext } from 'react';

import pokemonContext from '../context/pokemonContext';

function Buttons() {
  const { types, resetFilter, filterPokemons } = useContext(pokemonContext);

  return (
    <section>
      <button type="button" onClick={ resetFilter }>All</button>
      {
        types.map((type) => (
          <button
            key={ type }
            onClick={ () => filterPokemons(type) }
          >
            { type }
          </button>
        ))
      }
    </section>
  );
}

export default Buttons;
