import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Logins';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import Episodes from './pages/Episodes';

function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/characters/:id" component={ CharacterDetails } />
        <Route path="/characters" component={ Characters } />
        {/* <Route path="/episodes/:id" component={} /> */}
        <Route path="/episodes" component={ Episodes } />
        {/* <Route path="/about" component={} /> */}
      </Switch>
    </Router>
  )
}

export default routes;
