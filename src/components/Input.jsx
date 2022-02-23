import React from 'react';

class Input extends React.Component {
  render() {
    const { handleChange, type, name, value, text } = this.props;

    return (
      <label htmlFor={ `input-${name}` }>
        { text }:
        <input
          type={ type }
          id={ `input-${name}` }
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Input;
