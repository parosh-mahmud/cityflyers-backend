// FlightResults.js
import React, { useEffect } from 'react';
import { Box, Typography,Grid,Paper } from '@mui/material'; // Import Material-UI components
import LayoutPage from '../../pages/LayoutPage';
import FlightCard from './FlightCard';
import { useDispatch, useSelector } from 'react-redux';
// import { setSearchID, setSelectedResultID } from '../../redux/reducers/flightSlice';
import { setSearchID, selectSearchID, selectResults } from '..//../redux/reducers/flightSliceNew';
import FilterCalendar from './FilterCalender';
import { selectFlightSearchData } from '../../redux/reducers/flightSlice';
const recommendedBoxStyle = {
  width: '100%',
  height: '48px',
  backgroundColor: 'green',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  
};

const boxStyle={
  width: '294px',
  height:'100%',
  backgroundColor: 'gray',
}



const FlightResults = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights.flights);
  const searchID = useSelector(selectSearchID);

const flightSearchData = useSelector(selectFlightSearchData);
  // const resultsArray = flightSearchData && flightSearchData.Results ? flightSearchData.Results : [];
const resultsArray = flightSearchData && flightSearchData[0] && flightSearchData[0].Results
  ? flightSearchData[0].Results
  : [];
  console.log('flightSearchData:', flightSearchData);
// console.log('resultsArray:', resultsArray);

  // Update searchID in Redux store when FlightResults component mounts
  useEffect(() => {
    if (searchID) {
      dispatch(setSearchID(searchID));
    }
  }, [dispatch, searchID]);

  const handleSelect = (selectedResultID) => {
    console.log('Search ID:', searchID);
    console.log('Selected Result ID:', selectedResultID);
  };

  return (
    <LayoutPage>

 <Grid container spacing={2}>
  {/* First Grid */}
  <Grid item xs={12}>
    <Paper style={{ height: 'auto', padding: 16 }}>
      {/* First Row with Background Color */}
      <Box sx={{ marginBottom: 2, backgroundColor: 'lightblue', padding: 2,height:'80px' }}>
        <Typography variant="h6">First Row</Typography>
        {/* Content for the first row */}
       
      </Box>

      {/* Second Row with Background Color */}
      <Box sx={{ backgroundColor: 'lightgreen', padding: 2, display: 'flex',
        justifyContent: 'center', alignItems:'center'}}>
        <FilterCalendar/>
        {/* Content for the second row */}
        
      </Box>
    </Paper>
  </Grid>

      {/* Second Grid */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {/* First Grid within the Second Grid */}
          <Grid item xs={9}>
            <Paper style={{ height: '100%', padding: 16 }}>
              {/* Content for the first Paper within the Second Grid */}
              <Box sx={{width:'100%',height:'36px',backgroundColor:'red'}}>
              
              </Box>
              <Box sx={{width:'100%',height:'48px',backgroundColor:'green',display:'flex',marginTop:'10px',marginBottom:'5px'}}>
             <Box sx={recommendedBoxStyle}>
                  <Box sx={boxStyle}>Recomanded</Box>
                  <Box sx={boxStyle}>Cheapest</Box>
                  <Box sx={boxStyle}>Fastest</Box>
                </Box>
                 
              </Box>
              <Box>
       
     {flightSearchData.Results && flightSearchData.Results.map((flight) => (
  <FlightCard key={flight.ResultID} flightData={flight} onSelect={() => handleSelect(flight.ResultID)} />
))}

      </Box>
            </Paper>
            
          </Grid>

          {/* Second Grid within the Second Grid */}
          <Grid item xs={3}>
            <Paper style={{ height: '100%', padding: 16 }}>
              {/* Content for the second Paper within the Second Grid */}
              Second Grid in Second Grid - 10%
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
     
    </LayoutPage>
  );
};

export default FlightResults;
