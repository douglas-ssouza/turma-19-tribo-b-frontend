import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <header>
        <div>
          <h1>Título</h1>
        </div>
        <nav>
          <ul>
            <li>Serviços</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Header;
