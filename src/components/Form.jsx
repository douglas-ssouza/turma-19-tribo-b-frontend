import React from 'react';

import Select from './Select';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: 0,
      description: '',
      estate: '',
      openToEmails: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value,
    });
  }

  render() {
    const { name, email, age, description, estate, openToEmails } = this.state;

    return (
      <form>
        <fieldset>
          <legend>Pessoal</legend>
          <label htmlFor="input-name">
            Nome:
            <input type="text" id="input-name" name="name" value={ name } onChange={ this.handleChange }/>
          </label>
          <br />
          <label htmlFor="input-email">
            Email:
            <input type="email" id="input-email" name="email" value={ email } onChange={ this.handleChange } />
          </label>
          <br />
          <label htmlFor="input-age">
            Idade:
            <input type="number" id='input-age' name="age" value={ age } onChange={ this.handleChange } />
          </label>
          <br />
        </fieldset>
        <fieldset>
          <legend>Profissional</legend>
          <label htmlFor="description">
            Descrição:
            <textarea
              id="description"
              cols="50"
              rows="3"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            ></textarea>
          </label>
          <br />
          
          <Select estate={ estate } handleChange={ this.handleChange } />

          <br />
          <label htmlFor="check-emails">
            <input type="checkbox" id='check-emails' name="openToEmails" value={ openToEmails } onChange={ this.handleChange } />
            Deseja receber emails irritantes
          </label>
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Form;

// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
