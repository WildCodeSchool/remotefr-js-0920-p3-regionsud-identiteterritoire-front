import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Templates from './components/templates';
import Commune from './components/pages/Commune'; // Exemple
import Home from './components/pages/Home'; // Exemple
import Team from './components/pages/Team/Team';

function App() {
  return (
    <div>
      <Templates>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/commune/:id" component={Commune} />
          <Route path="/team" component={Team} />
        </Switch>
      </Templates>
    </div>
  );
}

export default App;
