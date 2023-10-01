// ResultPage.js

import React from 'react';
import { Box, Button, Flex, VStack } from '@chakra-ui/react'; // Import Flex from Chakra UI
import LayoutPage from '../../pages/LayoutPage';
import Oneway from '../FlightSearch/JourneyType';
import SearchFlight from '../dashboardComponents/SearchFlight';
import SearchForm from '../FlightSearch/SearchForm';
import { SearchIcon } from '@chakra-ui/icons';
const ResultPage = () => {
  return (
    <LayoutPage>
      {/* Use Flex to arrange components vertically */}
      <VStack mt="50px" alignItems="center" >
        <Oneway />
        <SearchForm/>
         <Box 
      padding="4"
        border="1px solid #E2E8F0"
        borderRadius="4px"
        boxShadow="md"
        height="96px"
        backgroundColor="red"
        alignItems="center"
       >
         <Button justifyContent=
        "center" colorScheme="red" ml={2}>
                <Flex alignItems="center">
                  <SearchIcon mr={2} />
                  Search
                </Flex>
              </Button>
      </Box>
    
      </VStack>
    </LayoutPage>
  );
}

export default ResultPage;
