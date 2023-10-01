import React, { useEffect, useState } from 'react'
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
  Stack,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import { SearchIcon } from '@chakra-ui/icons';

const airports = [
  {
    iata: 'DAC',
    city: 'Dhaka',
    country: 'Bangladesh',
    name: 'Hazrat Shahjalal International Airport',
  },
  {
    iata: 'JFK',
    city: 'New York',
    country: 'United States',
    name: 'John F. Kennedy International Airport',
  },
  
  // You can add more airport data as needed.
];

const SearchForm = ({journeyType}) => {

    const [isOpen, setIsOpen] = useState(false);
  const [selectedJourneyDate, setSelectedJourneyDate] = useState(new Date());
  const [selectedReturnDate, setSelectedReturnDate] = useState(new Date());
  const [fromAirportListOpen, setFromAirportListOpen] = useState(false);
  const [toAirportListOpen, setToAirportListOpen] = useState(false);
  const [selectedFromAirport, setSelectedFromAirport] = useState(null);
  const [selectedToAirport, setSelectedToAirport] = useState(null);
  const [searchedAirports, setSearchedAirports] = useState([]); 

  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
  const JourneyType = journeyType;
  console.log(JourneyType)
    
const handleSearchQueryChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value); // Update the searchQuery state as you type
    console.log(`Search query: ${value}`);
  };
const handleOpen = () => {
    setIsOpen(true);
  };
   const handleClose = () => {
    setIsOpen(false);
  };


  const handleFromAirportSelect = (airport) => {
    setSelectedFromAirport(airport);
    setFromAirportListOpen(false);
  };

  const handleToAirportSelect = (airport) => {
    setSelectedToAirport(airport);
    setToAirportListOpen(false);
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
const fetchAndDisplayAirports = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/airports/airportList?query=${searchQuery}`);
    if (response.ok) {
      const airportData = await response.json();
      console.log('API response: ', airportData);

      // Update searchedAirports with the fetched data
      setSearchedAirports(airportData);
    } else {
      console.error('Failed to fetch airport data');
    }
  } catch (error) {
    console.error('Error fetching airport data:', error);
  }
};

// Call the fetchAndDisplayAirports function when searchQuery changes
useEffect(() => {
  if (!searchQuery) {
    // If searchQuery is empty, clear the searchedAirports and return to stop useEffect
    setSearchedAirports([]);
    return;
  }

  // Only fetch data when searchQuery is not empty
  fetchAndDisplayAirports();
}, [searchQuery]);




  

  return (
    <div>
     
                {/* Form Inputs */}
                <Flex justify="space-between"
                align="center"
                mt={4} wrap={['wrap', 'wrap', 'nowrap']} >
      <Box
        w={['100%', '50%', '20%']}
        padding="4"
        position="relative"
        border="1px solid #E2E8F0"
        borderRadius="4px"
        boxShadow="md"
        height="96px"
        cursor="pointer"
        
      >
        <Popover
  isOpen={fromAirportListOpen}
  onOpen={() => setFromAirportListOpen(true)}
  onClose={() => setFromAirportListOpen(false)}
  placement="bottom"
>
  <PopoverTrigger>
    <Flex direction="column" alignItems="start">
      <Text fontSize="md" fontWeight="semibold">
        From
      </Text>
      <Text fontSize="sm" fontWeight="semibold">
        {selectedFromAirport ? selectedFromAirport.name : 'Select an airport'}
      </Text>
      <Text fontSize="sm" color="gray.600">
        {selectedFromAirport ? `${selectedFromAirport.iata}, ${selectedFromAirport.city}` : ''}
      </Text>
    </Flex>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Select an airport</PopoverHeader>
    <PopoverBody>
      <Flex alignItems="center">
        <Input
          placeholder="Type to search airports"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          width="100%"
        />
      </Flex>
      {/* Display search results here */}
      {searchedAirports.map((airport) => (
        <div
          key={airport.iata}
          onClick={() => handleFromAirportSelect(airport)}
          style={{ cursor: 'pointer' }}
        >
          {`${airport.name} (${airport.iata}), ${airport.city}, ${airport.country}`}
        </div>
      ))}
    </PopoverBody>
  </PopoverContent>
</Popover>

      </Box>

      <Box
        w={['100%', '50%', '20%']}
        padding="4"
        position="relative"
        border="1px solid #E2E8F0"
        borderRadius="4px"
        boxShadow="md"
        height="96px"
        
        cursor="pointer"
        
      >
        <Popover
          isOpen={toAirportListOpen}
            onOpen={() => setToAirportListOpen(true)}
            onClose={() => setToAirportListOpen(false)}
            placement="bottom"
        >
          <PopoverTrigger>
            <Flex direction="column" alignItems="start">
              <Text fontSize="md" fontWeight="semibold">
                To
              </Text>
              <Text fontSize="sm" fontWeight="semibold">
                {selectedToAirport ? selectedToAirport.name : 'Select an airport'}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {selectedToAirport ? `${selectedToAirport.iata}, ${selectedToAirport.city}` : ''}
              </Text>
            </Flex>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <Flex alignItems="center">
              <Input
                placeholder="Type to search airports"
                value={searchQuery}
                onChange={handleSearchQueryChange}
                width="100%"
              />
            </Flex>
            <PopoverBody>
              <ul>
                {airports.map((airport) => (
                  <li
                    key={airport.code}
                    onClick={() => handleToAirportSelect(airport)}
                    style={{ cursor: 'pointer' }}
                  >
                    {`${airport.name} (${airport.code}), ${airport.city}, ${airport.country}`}
                  </li>
                ))}
              </ul>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>

      <Box
        w={['100%', '50%', '20%']}
        padding="4"
        border="1px solid #E2E8F0"
        borderRadius="4px"
        boxShadow="md"
        height="96px"
        
        cursor="pointer"
       
        onClick={handleOpen}
      >
        <Flex direction="column" alignItems="start">
          <Text fontSize="md" fontWeight="semibold">
            Journey Date
          </Text>
          <Text fontSize="sm" fontWeight="semibold">
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
        w={['100%', '50%', '20%']}
        padding="4"
        border="1px solid #E2E8F0"
        borderRadius="4px"
        boxShadow="md"
        height="96px"
       
        cursor="pointer"
        onClick={handleOpen}
      >
        <Flex direction="column" alignItems="start">
          <Text fontSize="md" fontWeight="semibold">
            Return Date
          </Text>
          <Text fontSize="sm" fontWeight="semibold">
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
     

      <Box w={['100%', '50%', '20%']}
     
      >
        <Select
          h="96px"
          placeholder="Traveler Class"
          
        >
          <option>Economy</option>
          <option>Business</option>
          <option>First Class</option>
        </Select>
      </Box>

       

      
    </Flex>
              
    </div>
  )
}

export default SearchForm
