import { combineReducers } from 'redux';
import restaurants from './restaurant';

//this is the shared state amongst components
const reducer = combineReducers({
  restaurants
});

export default reducer;