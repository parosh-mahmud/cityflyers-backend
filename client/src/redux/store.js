import { createStore, combineReducers } from 'redux';
// import flightsReducer from './reducers/flightReducer';
import flightReducer from './reducers/flightSliceNew';
import flightSlice from './reducers/flightSlice';
const rootReducer = combineReducers({
  flights: flightReducer,
  flight: flightSlice,
  // Add other reducers if you have them
});

const store = createStore(rootReducer);

export default store;
