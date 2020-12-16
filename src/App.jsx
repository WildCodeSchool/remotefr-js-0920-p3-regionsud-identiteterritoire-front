import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Templates from './components/templates';
import Commune from './components/pages/Commune'; // Exemple
import Home from './components/pages/Home'; // Exemple
import Destination from './components/Destination';

function App() {
  return (
    <div>
      <Templates>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/destination" component={Destination} />
          <Route exact path="/commune/:id" component={Commune} />
        </Switch>
      </Templates>
    </div>
  );
}

export default App;
