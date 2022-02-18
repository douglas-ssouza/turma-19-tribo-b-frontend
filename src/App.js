import React from 'react';
import Meme from './components/Meme';

import memes from './data';

class App extends React.Component {
  render() {
    return (
      <>
        { memes.map((meme) => <Meme key={ meme.id } meme={ meme } />) }
      </>
    );
  }
}

export default App;
