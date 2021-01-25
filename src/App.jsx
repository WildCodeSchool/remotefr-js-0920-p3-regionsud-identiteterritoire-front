import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Templates from './components/templates';
import Commune from './components/pages/Commune'; // Exemple
import Home from './components/pages/Home'; // Exemple
import FloatQuickAccess from './components/elements/FloatQuickAccess'; // Exemple

function App() {
  return (
    <div>
      <Templates>
        <FloatQuickAccess />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/commune/:id" component={Commune} />
        </Switch>
      </Templates>
    </div>
  );
}

export default App;
