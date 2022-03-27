import React from 'react';

import Pokedex from './components/Pokedex';
import Buttons from './components/Buttons';

class App extends React.Component {
  render() {
    return (
      <>
        <Pokedex />
        <Buttons />
      </>
    );
  }
}

export default App;
