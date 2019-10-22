import React from 'react';
import {connect} from 'react-redux';
import { setRestaurantsThunks, createRestaurantThunks, destroyRestaurantThunks } from '../reducer/restaurant';
import IndecisiveForm from './IndecisiveForm';

class Restaurants extends React.Component {
    constructor() {
        super();
        this.state = {
          error: '',
        }
      this.onChange = this.onChange.bind(this);
      this.create = this.create.bind(this);
      this.destroyRestaurant = this.destroyRestaurant.bind(this);
    }
    onChange(ev) {
      this.setState({[ev.target.name]: ev.target.value});        
    }
    async create(ev) {
      ev.preventDefault();
      const payload = {name: this.state.name, cuisine: this.state.cuisine, imageURL: this.state.imageURL}
      try {
        if (payload.name === undefined) {
          throw 'Name for recipe is required';
        }
        if (payload.cuisine === undefined) {
          throw 'Cuisine is required';
        }
        await this.props.createRestaurant(payload);
      }
      catch(ex) {
        alert(ex);
      }
    }
    async destroyRestaurant(id) {
      await this.props.destroyRestaurant(id);
    }
    render() {
      return (
        <div>
          {
            <IndecisiveForm onChange = { this.onChange } create = { this.create } destroyRestaurant = { this.destroyRestaurant } location = { this.props.location } />
          }
        </div>
      )
    }
};

const mapStateToRestaurantsProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToRecipeProps = {
  setRestaurants: setRestaurantsThunks,
  createRestaurant: createRestaurantThunks,
  destroyRestaurant: destroyRestaurantThunks
}

export default connect(mapStateToRestaurantsProps, mapDispatchToRecipeProps)(Restaurants);