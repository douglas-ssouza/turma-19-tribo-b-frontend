import React from 'react';
import { connect } from 'react-redux';

import { submitForm } from '../redux/actions';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const { submitForm } = this.props;
    submitForm(this.state);
  }

  render() {
    const { name, email, cpf } = this.state;

    return (
      <main>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="input-name">
            Nome:
            <input
              type="text"
              id="input-name"
              value={ name }
              name="name"
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label htmlFor="input-email">
            Email:
            <input
              type="email"
              id="input-email"
              value={ email }
              name="email"
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label htmlFor="input-cpf">
            CPF:
            <input
              type="text"
              id="input-cpf"
              maxLength="11"
              value={ cpf }
              name="cpf"
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitForm: (info) => dispatch(submitForm(info)),
});

export default connect(null, mapDispatchToProps)(Form);
