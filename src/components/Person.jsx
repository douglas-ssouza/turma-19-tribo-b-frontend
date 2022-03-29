import React from 'react';

class Person extends React.Component {
  render() {
    const { name, email, cpf } = this.props;

    return (
      <div>
        <h2>{ `Nome: ${name}` }</h2>
        <p>{ `Email: ${email}` }</p>
        <p>{ `CPF: ${cpf}` }</p>
      </div>
    );
  }
}

export default Person;
