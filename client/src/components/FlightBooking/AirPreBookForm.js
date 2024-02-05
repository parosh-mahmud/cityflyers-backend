import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { selectAirPriceData } from '../../redux/slices/airPriceSlice';
import { Box, Grid, Paper } from '@mui/material';
import FlightCard from '../FlightResults/FlightCard';
import PassengerDetailsForm from '../ReservationForm/PassengerDetailsForm';
import AirPriceShow from './AirPriceShow';

const AirPreBookForm = () => {
  const airPriceData = useSelector(selectAirPriceData);
const segment = airPriceData?.Results[0]?.segments[0];
const segmentReturn = airPriceData?.Results[0]?.segments[1];
console.log(airPriceData);
  // Use selectedFlightData to display details on the new page

  return (
    <>
      <div style={{ display: 'flex' }}>
      <div style={{ flex: '1',  display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: '1', backgroundColor: 'blue' }}>
          {/* Content for the first column */}
          <FlightCard flightData={{ segments: [segment] }} showActions={false}/>
          <FlightCard flightData={{ segments: [segmentReturn] }} showActions={false}/>
          
        </div>
        <div style={{ flex: '1',  }}>
          {/* Content for the second column */}
          <PassengerDetailsForm/>
        </div>
      </div>
      <div style={{ flex: '0 0 20%', backgroundColor:'lightgray' }}>
        {/* Add any additional content for the 10% width side here */}
        <AirPriceShow/>
      </div>
    </div>
    </>
  );
};

export default AirPreBookForm;
