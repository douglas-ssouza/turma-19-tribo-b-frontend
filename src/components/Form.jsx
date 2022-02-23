import React from 'react';

import Select from './Select';
import Input from './Input';

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
          <Input />
          <Input
            handleChange={ this.handleChange }
            type="text"
            name="name"
            value={ name }
            text="Nome"
          />
          <br />
          <Input 
            handleChange={ this.handleChange }
            type="email"
            name="email"
            value={ email }
            text="Email"
          />
          <br />
          <Input 
            handleChange={ this.handleChange }
            type="number"
            name="age"
            value={ age }
            text="Idade"
          />
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
