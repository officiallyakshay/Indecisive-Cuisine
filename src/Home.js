import React from 'react';
import {connect} from 'react-redux';

const Home = (props) => {
  console.log('home', props)
  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  );
}

const mapState = state => {
  return {
    restaurants: state.restaurants,
  }
}

export default connect(mapState)(Home);