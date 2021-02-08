import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Templates from './components/templates';
import Commune from './components/pages/Commune'; // Exemple
import Raw from './components/pages/Raw'; // Exemple
import Home from './components/pages/Home'; // Exemple
import Team from './components/pages/Team/Team';
import Info from './components/pages/Info';

function App() {
  return (
    <div>
      <Templates>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/commune/:id" component={Commune} />
          <Route exact path="/commune/:id/raw" component={Raw} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/info" component={Info} />
        </Switch>
      </Templates>
    </div>
  );
}

export default App;
