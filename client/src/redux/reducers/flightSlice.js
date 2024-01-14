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

// Async action using Thunk middleware
export const fetchFlightResults = (formData) => async (dispatch) => {
  try {
    // Make the API call using formData
    const response = await axios.post('http://localhost:5000/api/airSearch', formData);
    
    // Dispatch the result to the store
    dispatch(setFlightSearchData(response.data));
    
    console.log('API Response:', response.data);
  } catch (error) {
    console.error('Error fetching flight results:', error.message);
  }
};

export const { setFlightSearchData } = flightSlice.actions;
export const selectFlightSearchData = (state) => state.flight.searchData;

export default flightSlice.reducer;
