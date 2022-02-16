import Meme from './Meme';

import memes from './data';

function App() {
  return (
    <>
      { memes.map(({ id, name, url }) => <Meme key={ id } name={ name } url={ url } />) }
    </>
  );
}

export default App;
