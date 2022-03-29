import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Form from './pages/Form';
import List from './pages/List';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/form" component={ Form } />
          <Route path="/list" component={ List } />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
