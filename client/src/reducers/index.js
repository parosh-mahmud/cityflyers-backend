// reducers/index.js
import { combineReducers } from 'redux';
import flightReducer from './flightReducer';
import reservationReducer from './reservationReducer';

const rootReducer = combineReducers({
  flight: flightReducer,
  reservation: reservationReducer,
  // ...add more reducers here if needed
});

export default rootReducer;
