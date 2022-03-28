import React from 'react';
import { connect } from 'react-redux';

import { filterPokemons, resetFilter } from '../redux/actions';

class Buttons extends React.Component {
  render() {
    const { types, filterPokemons, resetFilter } = this.props;

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
}

const mapStateToProps = (state) => ({
  types: state.pokemons.types,
});

const mapDispatchToProps = (dispatch) => ({
  filterPokemons: (filter) => dispatch(filterPokemons(filter)),
  resetFilter: () => dispatch(resetFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
