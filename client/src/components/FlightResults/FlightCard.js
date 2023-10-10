import React, { useState } from 'react';
import { Box, Button, Link, Text } from '@chakra-ui/react';
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';
import axios from 'axios';

const FlightCard = ({ flightData }) => {
  const segment = flightData.segments[0];
const [selectedAirPrice, setSelectedAirPrice] = useState(null);
const handleSelect = async () => {
  try {
    const requestBody = {
      SearchID: '1b123aae-dd05-48e7-b12a-b14436595c50',
      ResultID: 'e80ee235-3a31-4435-a308-4bc8cdd50ec7'
    };

    const response = await axios.post('YOUR_API_ENDPOINT', requestBody, {
      headers: {
        Authorization: `Bearer YOUR_ACCESS_TOKEN`,
        'Content-Type': 'application/json'
      }
    });

    // Assuming the API response matches the structure you provided
    const selectedAirPrice = response.data?.Results[0]?.Fares[0]?.TotalFare;

    setSelectedAirPrice(selectedAirPrice);
  } catch (error) {
    console.error('Error fetching airPrice:', error);
  }
};


  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={4}
      mb={4}
      height="200px"
      backgroundColor="teal.200"
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        Flight Information
      </Text>
      <Box display="flex" flexWrap="wrap">
        <FlightInfoItem label="Operating Carrier" value={segment.Airline ? segment.Airline.OperatingCarrier : 'N/A'} />
        <FlightInfoItem label="Flight Number" value={segment.Airline ? segment.Airline.FlightNumber : 'N/A'} />
        <FlightInfoItem label="Airline Code" value={segment.Airline ? segment.Airline.AirlineCode : 'N/A'} />
        <FlightInfoItem label="Airline Name" value={segment.Airline ? segment.Airline.AirlineName : 'N/A'} />
        <FlightInfoItem label="Cabin Class" value={segment.Airline ? segment.Airline.CabinClass : 'N/A'} />
        
        
        <FlightInfoItem
          label="Origin Airport"
          value={segment.Origin ? segment.Origin.Airport.AirportName : 'N/A'}
        />
        
        <FlightInfoItem
          label="Origin Airport Code"
          value={segment.Origin ? segment.Origin.Airport.AirportCode : 'N/A'}
        />
        <FlightInfoItem
          label="Departure Time"
          value={segment.Origin ? segment.Origin.DepTime : 'N/A'}
          icon={<FaPlaneDeparture />}
        />
        <FlightInfoItem
          label="Arrival Time"
          value={segment.Destination ? segment.Destination.ArrTime : 'N/A'}
          icon={<FaPlaneArrival />}
        />


        <FlightInfoItem
          label="Journey Duration"
          value={segment.JourneyDuration ? `${segment.JourneyDuration} minutes` : 'N/A'}
        />
          <FlightInfoItem
          label="Aircraft"
          value={segment.Equipment ? `${segment.Equipment}` : 'N/A'}
        />
      </Box>
      <Button onClick={handleSelect} as={Link} to={`/flight/${flightData.id}/passenger-details`} colorScheme="teal" mt={4}>
        Select
      </Button>
    </Box>
  );
};

const FlightInfoItem = ({ label, value, icon }) => (
  <Box flex="1 1 33%" mb={2} display="flex" alignItems="center">
    {icon && icon}
    <Text ml={icon ? 2 : 0} isTruncated>
      <strong>{label}:</strong> {value}
    </Text>
  </Box>
);

export default FlightCard;
