import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

function FlightSearchBar() {
  return (
    <Box
      id="searchbar"
      fontFamily="Gilroy"
      position="relative"
      background="#fff"
      boxShadow="0 20px 100px 10px rgba(24, 33, 77, .05)"
      borderRadius="20px"
      padding="50px 30px 40px"
    >
      <Flex
        direction="column"
        wrap="wrap"
        className="bar"
      >
        <Flex className="box location from" alignItems="center">
          <Text className="label">From</Text>
          <Text className="value">Dhaka</Text>
          <Text className="sub-value">DAC, Hazrat Shahjalal International Airport</Text>
        </Flex>
        <Flex className="box location to has-swapper" alignItems="center">
          <Text className="swapper"></Text>
          <Text className="label">To</Text>
          <Text className="value">Cox's Bazar</Text>
          <Text className="sub-value">CXB, Cox's Bazar Airport</Text>
        </Flex>
        <Flex className="box date depart" alignItems="center">
          <Text className="label">Journey Date</Text>
          <Text className="value">28 <span>Sep'23</span></Text>
          <Text className="sub-value">Thursday</Text>
        </Flex>
        <Box className="box date return">
          <Text className="label">Return Date</Text>
          <Text className="sub-value inline-style">Save more on return flight</Text>
        </Box>
        <Flex className="box traveler" alignItems="center">
          <Text className="label">Traveler, Class</Text>
          <Text className="value">1 Traveler</Text>
          <Text className="sub-value">Economy</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default FlightSearchBar;
