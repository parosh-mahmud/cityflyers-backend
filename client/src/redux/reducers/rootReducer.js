// rootReducer.js
import { combineReducers } from 'redux';
import flightReducer from './flightSlice'; // Update with the actual path

const rootReducer = combineReducers({
  flight: flightReducer,
  // Add other reducers here if you have them
});

export default rootReducer;
