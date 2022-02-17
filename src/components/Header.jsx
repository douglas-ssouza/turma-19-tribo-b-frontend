import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <h1>Trybe</h1>
        </div>
        <nav>
          <ul>
            <li>Conteúdo</li>
            <li>Trabalhe conosco</li>
            <li>Sobre</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
