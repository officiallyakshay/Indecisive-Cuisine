import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

const Nav = (props) => {
  console.log('hi', props)
  return (
    <header>
      <nav>
        <Link to='/' className={ props.location.pathname === '/' ? 'selected' : ''}>Home</Link>
        <Link to='/restaurants' className={ props.location.pathname === '/restaurants' ? 'selected' : ''}>Indecisive?</Link>
      </nav>
    </header>
  ); 
}

const mapState = state => {
  return {
    restaurants: state.restaurants,
  }
}

export default connect(mapState)(Nav);