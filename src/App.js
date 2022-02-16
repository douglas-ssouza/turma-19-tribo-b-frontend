import Quote from './Quote';

import quotes from './data';

function App() {
  return (
    <>
      { quotes.map(({ quote, author }) => <Quote quote={ quote } author={ author } />) }
    </>
  );
}

export default App;
