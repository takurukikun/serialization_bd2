import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DefaultLayout from '_layouts/default'

import Dashboard from '../pages/Dashboard'
import Serialization from '../pages/Serialization'

const Routes = (): JSX.Element => {
  return (
    <Route
      render={(props) => (
        <DefaultLayout {...props}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/serializacao" component={Serialization} />
          </Switch>
        </DefaultLayout>
      )}
    />
  )
}

export default Routes
