import { createStore, combineReducers } from 'redux';
import flightsReducer from './reducers/flightReducer';

const rootReducer = combineReducers({
  flights: flightsReducer,
  // Add other reducers if you have them
});

const store = createStore(rootReducer);

export default store;
