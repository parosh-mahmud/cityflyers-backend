import React, { useState,useEffect } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  Select,
  Button,
  RadioGroup,
  Radio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import 'react-datepicker/dist/react-datepicker.css';
import LayoutPage from '../../pages/LayoutPage';
import Oneway from './JourneyType';
import SearchForm from './SearchForm';



const SearchFlight = () => {
 


 

  return (
    <Box>
      <Tabs  variant="enclosed" colorScheme="red">
        <TabList>
          <Tab>Flight</Tab>
          <Tab>Hotel</Tab>
          <Tab>Tour Packages</Tab>
          <Tab>Tourist Visa</Tab>
          <Tab>Rent a Car</Tab>
          <Tab>Cruises</Tab>
          <Tab>More</Tab>
        </TabList>
        <TabPanels>
          <TabPanel >
            {/* Flight Search Panel */}
            <Box>
              {/* One way, Return, Multicity */}
             <Oneway/>
              <SearchForm/>
              

            </Box>
            <Button colorScheme="red" ml={2}>
                <Flex alignItems="center">
                  <SearchIcon mr={2} />
                  Search
                </Flex>
              </Button>
          </TabPanel>
          {/* Additional TabPanels for other tabs */}
          <TabPanel>
            <p>Content for Hotel Tab</p>
          </TabPanel>
          <TabPanel>
            <p>Content for Tour Packages Tab</p>
          </TabPanel>
          <TabPanel>
            <p>Content for Tourist Visa Tab</p>
          </TabPanel>
          <TabPanel>
            <p>Content for Rent a Car Tab</p>
          </TabPanel>
          <TabPanel>
            <p>Content for Cruises Tab</p>
          </TabPanel>
          <TabPanel>
            <p>Content for More Tab</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SearchFlight;
