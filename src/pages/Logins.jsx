import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { history } = this.props;
    history.push('/characters');
  }

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="input-email">
          <input
            data-testid="email-input"
            type="email"
            id="input-email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label htmlFor="input-password">
          <input
            data-testid="password-input"
            type="password"
            id="input-password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <button type="submit" disabled={ !email || !password }>Entrar</button>
      </form>
    );
  }
}

export default Login;
