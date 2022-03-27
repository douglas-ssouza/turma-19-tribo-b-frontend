import React from 'react';
import { connect } from 'react-redux';

import { filterByType, resetFilter } from '../redux/actions';

class Buttons extends React.Component {
  render() {
    const { types, filter, reset } = this.props;

    return (
      <section>
        <button type="button" onClick={ reset }>All</button>
        {
          types.map((type) => (
            <button type="button" onClick={ () => filter(type)}>{ type }</button>
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
  filter: (type) => dispatch(filterByType(type)),
  reset: () => dispatch(resetFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
