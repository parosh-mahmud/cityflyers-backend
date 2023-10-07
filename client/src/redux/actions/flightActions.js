import * as actionTypes from './actionTypes';

export const setFlights = (flights) => {
  return {
    type: 'SET_FLIGHTS',
    payload: flights,
  };
};

