import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchFlight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJourneyDate, setSelectedJourneyDate] = useState(new Date());
  const [selectedReturnDate, setSelectedReturnDate] = useState(new Date());

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleJourneyDateChange = (date) => {
    setSelectedJourneyDate(date);
    handleClose();
  };

  const handleReturnDateChange = (date) => {
    setSelectedReturnDate(date);
    handleClose();
  };

  const getDayOfWeek = (date) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay(); // 0 for Sunday, 1 for Monday, etc.
    return daysOfWeek[dayIndex];
  };

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
              <Flex align="center" mb={4}>
                <RadioGroup defaultValue="oneWay">
                  <Radio value="oneWay" size="lg" colorScheme="teal">
                    <Text fontSize="lg">One Way</Text>
                  </Radio>
                  <Radio value="return" size="lg" colorScheme="teal">
                    <Text fontSize="lg">Return</Text>
                  </Radio>
                  <Radio value="multicity" size="lg" colorScheme="teal">
                    <Text fontSize="lg">Multicity</Text>
                  </Radio>
                </RadioGroup>
              </Flex>

              <Box mt={4}>
                {/* Form Inputs */}
                <Flex alignItems="center">
                  <Box
                    width="100%"
                    padding="4"
                    border="1px solid #E2E8F0"
                    borderRadius="4px"
                    boxShadow="md"
                    height="96px"
                  >
                    <Flex direction="column" alignItems="start">
                      <Text fontSize="md" fontWeight="semibold">
                        From
                      </Text>
                      <Text fontSize="lg" fontWeight="bold">
                        Dhaka
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        DAC, Hazrat Shahjalal Int Airport
                      </Text>
                    </Flex>
                  </Box>

                  <Box
                    width="100%"
                    padding="4"
                    border="1px solid #E2E8F0"
                    borderRadius="4px"
                    boxShadow="md"
                    height="96px"
                    ml={2}
                  >
                    <Flex direction="column" alignItems="start">
                      <Text fontSize="md" fontWeight="semibold">
                        To
                      </Text>
                      <Text fontSize="lg" fontWeight="bold">
                        Cox's Bazar
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        CXB, Cox's Bazar Airport
                      </Text>
                    </Flex>
                  </Box>

                  <Box
                    width="100%"
                    padding="4"
                    border="1px solid #E2E8F0"
                    borderRadius="4px"
                    boxShadow="md"
                    height="96px"
                    ml={2}
                    onClick={handleOpen}
                    cursor="pointer"
                  >
                    <Flex direction="column" alignItems="start">
                      <Text fontSize="md" fontWeight="semibold">
                        Journey Date
                      </Text>
                      <Text fontSize="lg" fontWeight="bold">
                        {selectedJourneyDate ? selectedJourneyDate.toDateString() : 'Select a date'}
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        {selectedJourneyDate ? getDayOfWeek(selectedJourneyDate) : ''}
                      </Text>
                    </Flex>
                  </Box>
<Modal isOpen={isOpen} onClose={handleClose} size="sm">
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Select Date</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <DatePicker
                          selected={selectedJourneyDate}
                          onChange={handleJourneyDateChange}
                          minDate={new Date()}
                          dateFormat="MMMM d, yyyy"
                        />
                        
                        <Button mt={4} onClick={handleClose}>
                          Close
                        </Button>
                      </ModalBody>
                    </ModalContent>
                  </Modal>

                  <Box
                    width="100%"
                    padding="4"
                    border="1px solid #E2E8F0"
                    borderRadius="4px"
                    boxShadow="md"
                    height="96px"
                    ml={2}
                    cursor="pointer"
                    onClick={handleOpen}
                  >
                    <Flex direction="column" alignItems="start">
                      <Text fontSize="md" fontWeight="semibold">
                        Return Date
                      </Text>
                      <Text fontSize="lg" fontWeight="bold">
                        {selectedReturnDate ? selectedReturnDate.toDateString() : 'Select a date'}
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        {selectedReturnDate ? getDayOfWeek(selectedReturnDate) : ''}
                      </Text>
                    </Flex>
                  </Box>

                  <Modal isOpen={isOpen} onClose={handleClose} size="sm">
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Select Date</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                       
                        <DatePicker
                          selected={selectedReturnDate}
                          onChange={handleReturnDateChange}
                          minDate={selectedJourneyDate || new Date()}
                          dateFormat="MMMM d, yyyy"
                          className="ml-2"
                        />
                        <Button mt={4} onClick={handleClose}>
                          Close
                        </Button>
                      </ModalBody>
                    </ModalContent>
                  </Modal>

                  <Select
                    h="96px"
                    placeholder="Traveler Class"
                    ml={2}
                  >
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
