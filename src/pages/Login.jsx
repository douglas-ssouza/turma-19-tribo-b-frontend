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
    this.setState({ [name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const { history } = this.props;

    history.push('/home');
  }
  
  render() {
    const { email, password } = this.state;
    
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          placeholder="Digite seu email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          placeholder="Digite sua senha"
        />
        <br />
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
