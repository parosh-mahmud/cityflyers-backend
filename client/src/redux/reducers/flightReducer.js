import * as actionTypes from '../actions/actionTypes';

const initialState = {
  flights: [], // Ensure this is initially an empty array
  // other initial state properties
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FLIGHTS':
      return {
        ...state,
        flights: action.payload,
      };
    default:
      return state;
  }
};


export default flightReducer;
