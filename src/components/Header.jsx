import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Forms com Redux</h1>
        <Link to="/form">Form</Link>
        <br />
        <Link to="/list">List</Link>
      </header>
    );
  }
}

export default Header;
