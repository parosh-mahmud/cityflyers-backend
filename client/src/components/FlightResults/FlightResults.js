// FlightResults.js
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import LayoutPage from '../../pages/LayoutPage';
import FlightCard from './FlightCard';
import { useSelector } from 'react-redux';

const FlightResults = () => {
  const flights = useSelector((state) => state.flights.flights);
  
const resultsArray = flights && flights.Results ? flights.Results : [];
console.log(resultsArray)  
return (
    <LayoutPage>
      <div>
        <Heading as="h2" mb={4}>
          Flight Results 
        </Heading>
        {resultsArray.map((flightData) => (
        <FlightCard key={flightData.ResultID} flightData={flightData} />
      ))}
      </div>
    </LayoutPage>
  );
};

export default FlightResults;
