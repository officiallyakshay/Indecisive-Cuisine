import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = props => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/indecisive'>Indecisive?</NavLink>
    </div>
  ); 
}

export default Nav;