import React from 'react';

import pokemonContext from '../context/pokemonContext';

class Buttons extends React.Component {
  render() {
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
}

export default Buttons;
