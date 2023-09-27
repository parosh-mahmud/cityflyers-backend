// ResultPage.js

import React from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react'; // Import Flex from Chakra UI
import LayoutPage from '../../pages/LayoutPage';
import Oneway from '../various/Oneway';
import SearchFlight from '../dashboardComponents/SearchFlight';
import SearchForm from '../SearchForm';
const ResultPage = () => {
  return (
    <LayoutPage>
      {/* Use Flex to arrange components vertically */}
      <VStack mt="50px" alignItems="center" >
        <Oneway />
        <SearchForm/>
         
    
      </VStack>
    </LayoutPage>
  );
}

export default ResultPage;
