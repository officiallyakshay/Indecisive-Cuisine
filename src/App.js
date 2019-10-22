import React from 'react';
import Nav from './Nav';
import Routes from './Routes';
import { connect } from 'react-redux';
import { setRestaurantsThunks } from '../reducer/restaurant';

class App extends React.Component {
  componentDidMount() {
    this.props.setRestaurants();
  }
  render() {
    return (
      <div>
        < Nav location = { location } />
        < Routes location = { location } />
      </div>
    );
  }
}

const mapDispatchToAppProps = {
  setRestaurants: setRestaurantsThunks
}

export default connect(null, mapDispatchToAppProps)(App);