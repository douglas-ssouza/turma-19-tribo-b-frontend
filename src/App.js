import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        { routes() }
      </BrowserRouter>
    );
  }
}

export default App;
