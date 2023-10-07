import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';

const FlightCard = ({ flightData }) => {
  const segment = flightData.segments[0];

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
      </Box>
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
