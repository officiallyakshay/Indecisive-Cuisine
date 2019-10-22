import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Indecisive from './Indecisive';

class Routes extends React.Component {
  render() {
    return ( 
      <Switch>
        <Route exact path='/' component = { Home } />
        <Route exact path='/restaurants' component = { Indecisive } />
      </Switch>
    );
  }
}

export default Routes;