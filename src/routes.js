import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header';
import Form from './pages/Form';
import List from './pages/List';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ Form } />
          <Route path="/list" component={ List } />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
