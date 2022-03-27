import React from 'react';

import Pokedex from './components/Pokedex';
import List from './components/List';

class App extends React.Component {
  render() {
    return (
      <>
        <Pokedex />
        <List />
      </>
    );
  }
}

export default App;
