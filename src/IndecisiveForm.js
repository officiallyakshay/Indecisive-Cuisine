import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Restaurants = (props) => {
  const { onChange, create, destroyRestaurant } = props;
  console.log('p', props)
  const cuisines = ['American', 'Mexican', 'Chinese', 'Japanese'];
  return (
    <div>
      <form className='form'>
        Name <input name='name' onChange = { onChange }  /> <br/>
        Cuisine <select name='cuisine' onChange = { onChange } >
        <option value="--Choose Cuisine--">--Choose Cuisine--</option>
          {
            cuisines.map( (cuisine, idx) => <option key={idx} value={cuisine}>{cuisine}</option>)
          }
        </select>
      </form>
      <button onClick = { create } >Save</button>
      <div>
        {props.restaurants.map( restaurant => <div key={restaurant.id}>
          Name: <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link> <br/>
          Cuisine: {restaurant.cuisine}
          <div><img src={restaurant.imageURL} /></div>
          <button onClick = { () => destroyRestaurant(restaurant.id) } >X</button></div>)}
      </div>
    </div>
  )

}

const mapState = state => {
  return {
    restaurants: state.restaurants,
  }
}

export default connect(mapState)(Restaurants);