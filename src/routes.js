import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Map from './pages/map';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/map" exact component={Map} />
    </Switch>
  );
}

export default Routes;
