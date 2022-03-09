import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Logins';
import Characters from './pages/Characters';

function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route path="/chracters/:id" component={} /> */}
        <Route path="/characters" component={ Characters } />
        {/* <Route path="/episodes/:id" component={} />
        <Route path="/episodes" component={} />
        <Route path="/about" component={} /> */}
      </Switch>
    </Router>
  )
}

export default routes;
