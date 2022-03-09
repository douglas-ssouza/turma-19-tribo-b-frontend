import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <h1>Rick and Morty</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/episodes">Episodes</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
