import React from 'react';

import Bloco from './Bloco';

import blocos from '../data/blocos';

class Main extends React.Component {
  render() {
    return (
      <main>
        {
          blocos.map((b) => <Bloco key={ b.title } title={ b.title } content={ b.content }/>)
        }
      </main>
    );
  }
}

export default Main;
