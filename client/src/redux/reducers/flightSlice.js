// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   searchID: null,
//   selectedResultID: null,
//   flightData: null,
//   apiResponse: null, // Add a new state property for API response
// };

// const flightSlice = createSlice({
//   name: 'flight',
//   initialState,
//   reducers: {
//     setSearchID: (state, action) => {
//       state.searchID = action.payload;
//     },
//     setSelectedResultID: (state, action) => {
//       state.selectedResultID = action.payload;
//     },
//     setFlightData: (state, action) => {
//       state.flightData = action.payload;
//     },
//     setApiResponse: (state, action) => {
//       state.apiResponse = action.payload; // Update the API response in the state
//     },
//   },
// });

// export const { setSearchID, setSelectedResultID, setFlightData, setApiResponse } = flightSlice.actions;

// // Selectors
// export const selectSearchID = (state) => state.flight.searchID;
// export const selectSelectedResultID = (state) => state.flight.selectedResultID;
// export const selectFlightData = (state) => state.flight.flightData;
// export const selectApiResponse = (state) => state.flight.apiResponse; // Add selector for API response

// export default flightSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const flightSlice = createSlice({
  name: 'flight',
  initialState: {
    searchData: null, // Initial state for storing flight search data
  },
  reducers: {
    setFlightSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { setFlightSearchData } = flightSlice.actions;
export const selectFlightSearchData = (state) => state.flight.searchData;

export default flightSlice.reducer;
