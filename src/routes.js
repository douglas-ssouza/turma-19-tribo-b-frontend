import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Logins';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import Episodes from './pages/Episodes';
import EpisodeDetails from './pages/EpisodeDeatails';
import About from './pages/About';
import NotFound from './pages/NotFound';

function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/characters/:id" component={ CharacterDetails } />
        <Route path="/characters" component={ Characters } />
        <Route path="/episodes/:id" component={ EpisodeDetails} />
        <Route path="/episodes" component={ Episodes } />
        <Route path="/about" component={ About } />
        <Route path="" component={ NotFound } />
      </Switch>
    </Router>
  )
}

export default routes;
