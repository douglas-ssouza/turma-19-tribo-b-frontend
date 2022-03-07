import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import CharacterDetails from './pages/CharacterDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/home" component={ Home } />
          <Route path="/character/:id" component={ CharacterDetails } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
