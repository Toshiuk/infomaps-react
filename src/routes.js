import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Map from './pages/map'

function Routes() {
  return (
    <Switch>
      <Route path='/' component={Map} />
    </Switch>
  )
}

export default Routes
