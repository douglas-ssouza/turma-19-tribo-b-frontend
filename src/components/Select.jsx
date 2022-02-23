import React from 'react';

class Select extends React.Component {
  render() {
    const { estate, handleChange } = this.props;

    return (
      <select defaultValue="DEFAULT" name="estate" value={ estate } onChange={ handleChange }>
        <option value="DEFAULT" disabled>Selecione seu estado</option>
        <option value="sp">São Paulo</option>
        <option value="rs">Rio Grande do Sul</option>
        <option value="to">Tocantins</option>
        <option value="ac">Acre</option>
        <option value="ms">Mato Grosso do Sul</option>
      </select>
    )
  }
}

export default Select;
