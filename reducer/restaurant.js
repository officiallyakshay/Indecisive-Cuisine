import axios from 'axios';

const SET_RESTAURANTS = 'SET_RESTAURANTS';
const CREATE_RESTAURANT = 'CREATE_RESTAURANT';
const DESTROY = 'DESTROY';

const setRestaurants = restaurants => ({
  type: SET_RESTAURANTS,
  restaurants
})

const createRestaurant = restaurant => ({
  type: CREATE_RESTAURANT,
  restaurant
});

const destroyRestaurant = restaurant => ({
  type: DESTROY,
  restaurant
});

export const setRestaurantsThunks = () => async dispatch => {
  const restaurants = (await axios.get('/api/restaurants')).data;
  dispatch(setRestaurants(restaurants));
}

export const createRestaurantThunks = (payload) => async dispatch => {
  const restaurant = (await axios.post('/api/restaurants', payload)).data;
  dispatch(createRestaurant(restaurant));
}

export const destroyRestaurantThunks = (id) => async dispatch => {
  await axios.delete(`/api/restaurants/${id}`);
  dispatch(destroyRestaurant(id));
}

const restaurants = ( state = [], action ) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return action.restaurants;
    case CREATE_RESTAURANT:
      return [...state, action.restaurant];
    case DESTROY:
      return state.filter(restaurant => restaurant.id !== action.restaurant);
    default:
      return state;
  }
}

export default restaurants;

