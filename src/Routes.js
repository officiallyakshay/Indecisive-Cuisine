import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

class Routes extends React.Component {
  render() {
    return ( 
        <Switch>
          <Route exact path='/' component = { Home } />
          {/* <Route exact path='/indecisive' component = { Chef } /> */}
        </Switch>
    );
  }
}

export default Routes;