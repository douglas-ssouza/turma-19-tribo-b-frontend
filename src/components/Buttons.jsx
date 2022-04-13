import React from 'react';

import pokemonContext from '../context/pokemonContext';

function Buttons() {
  return (
    <pokemonContext.Consumer>
      {
        ({ types, resetFilter, filterPokemons }) => (
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
        )
      }  
    </pokemonContext.Consumer>
  );
}

export default Buttons;
