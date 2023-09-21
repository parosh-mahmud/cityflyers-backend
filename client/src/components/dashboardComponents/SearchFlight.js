import React from 'react';
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
  Spacer,
  InputGroup,
  InputRightElement,
  Select,
  Button,
} from '@chakra-ui/react';
import { ArrowBackIcon, CalendarIcon, SearchIcon } from '@chakra-ui/icons';

const SearchFlight = () => {
  return (
    <Box>
      <Tabs variant="enclosed" colorScheme="red">
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
          <TabPanel>
            {/* Flight Search Panel */}
            <Box>
              {/* One way, Return, Multicity */}
              <Flex>
                <Flex>
                  <ArrowBackIcon />
                  <Text>One Way</Text>
                </Flex>
                <Flex>
                  <ArrowBackIcon />
                  <Text>Return</Text>
                </Flex>
                <Flex>
                  <ArrowBackIcon />
                  <Text>Multicity</Text>
                </Flex>
              </Flex>

              <Box mt={4}>
                {/* Form Inputs */}
                <Flex alignItems="center">
                  <Input placeholder="From" />
                  <Input placeholder="To" ml={2} />
                  <InputGroup size="sm" ml={2}>
                    <Input placeholder="Departure" />
                    <InputRightElement children={<CalendarIcon />} />
                  </InputGroup>
                  <InputGroup size="sm" ml={2}>
                    <Input placeholder="Return" />
                    <InputRightElement children={<CalendarIcon />} />
                  </InputGroup>
                  <Select placeholder="Traveler Class" ml={2}>
                    <option>Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </Select>
                  
                </Flex>
              </Box>
              <Button colorScheme="red" ml={2}>
                    <Flex alignItems="center">
                      <SearchIcon mr={2} />
                      Search
                    </Flex>
                  </Button>
            </Box>
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
