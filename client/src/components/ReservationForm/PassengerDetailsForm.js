// import React from 'react';
// import { useSelector } from 'react-redux';

// const PassengerDetailsForm = () => {
//   const flightData = useSelector(state => state.flight.flightData);
  
//   // Make sure flightData is not null before accessing its properties
//   if (!flightData) {
//     return <div>Loading...</div>; // or handle loading state appropriately
//   }

//   // Access total fare from flightData (assuming it is stored in the Redux store)
//   const totalFare = flightData?.Results[0]?.TotalFare ?? 'N/A';

//   // Log flightData to the console
//   console.log('Flight Data:', flightData);

//   return (
//     <div>
//       <h2>Passenger Details Form</h2>
//       <p>Total Fare: {totalFare}</p>

//       {/* Render your passenger details form components here */}
//     </div>
//   );
// };

// export default PassengerDetailsForm;



import React, { useState } from 'react';
import { Box, Button, Container, Grid, Input, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import { setApiResponse } from '../../redux/reducers/flightSlice';
import { useHistory } from 'react-router-dom';
const PassengerDetailsForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
const passApiResponse = useSelector((state) => state.flight.apiResponse);
const airPriceData = useSelector((state)=>state.flight.flightData)
console.log(airPriceData)
const totalFare = airPriceData?.Results[0]?.TotalFare ?? 'N/A';
  const [passengerData, setPassengerData] = useState({
    Title: '',
    FirstName: '',
    LastName: '',
    PaxType: 'Adult',
    DateOfBirth: '',
    Gender: '',
    Address1: '',
    CountryCode: '',
    Nationality: '',
    ContactNumber: '',
    Email: '',
    IsLeadPassenger: true,
  });

  const handleInputChange = (field, value) => {
    setPassengerData({ ...passengerData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://api.flyhub.com/api/v1/AirPreBook', passengerData, {
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRoZWNpdHlmbHllcnNAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IjIwOTc4fDIxNTMxfDEwMy4xMjQuMjUxLjE0NywxMDMuMTI0LjI1MS4xNDciLCJuYmYiOjE2OTczMDk4NzgsImV4cCI6MTY5NzkxNDY3OCwiaWF0IjoxNjk3MzA5ODc4LCJpc3MiOiJodHRwczovL2FwaS5mbHlodWIuY29tIiwiYXVkIjoiYXBpLmZseWh1Yi5jb20ifQ.3An4oOBAWvkVz5V8-4dFxlSd8-J_NwYcixGe2bNT0pc',
          'Content-Type': 'application/json',
        },
      });

      const responseData = response.data;
      // dispatch(setApiResponse(responseData));
      history.push('/airpre-book');
    } catch (error) {
      console.error('Error submitting passenger details:', error);
    }
  };

  return (
     <Container>
      <Box p={4} borderWidth="1px" borderRadius="md" mb={4}>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <Text>Title:</Text>
          <Input
            variant="outline"
            placeholder="Title"
            value={passengerData.Title}
            onChange={(e) => handleInputChange('Title', e.target.value)}
          />
          <Text>First Name:</Text>
          <Input
            variant="outline"
            placeholder="First Name"
            value={passengerData.FirstName}
            onChange={(e) => handleInputChange('FirstName', e.target.value)}
          />
          <Text>Last Name:</Text>
          <Input
            variant="outline"
            placeholder="Last Name"
            value={passengerData.LastName}
            onChange={(e) => handleInputChange('LastName', e.target.value)}
          />
          <Text>Pax Type:</Text>
          <Input
            variant="outline"
            placeholder="Pax Type"
            value={passengerData.PaxType}
            onChange={(e) => handleInputChange('PaxType', e.target.value)}
          />
          <Text>Date of Birth:</Text>
          <Input
            variant="outline"
            type="date"
            placeholder="Date of Birth"
            value={passengerData.DateOfBirth}
            onChange={(e) => handleInputChange('DateOfBirth', e.target.value)}
          />
          <Text>Gender:</Text>
          <Input
            variant="outline"
            placeholder="Gender"
            value={passengerData.Gender}
            onChange={(e) => handleInputChange('Gender', e.target.value)}
          />
          <Text>Address:</Text>
          <Input
            variant="outline"
            placeholder="Address"
            value={passengerData.Address1}
            onChange={(e) => handleInputChange('Address1', e.target.value)}
          />
          <Text>Country Code:</Text>
          <Input
            variant="outline"
            placeholder="Country Code"
            value={passengerData.CountryCode}
            onChange={(e) => handleInputChange('CountryCode', e.target.value)}
          />
          <Text>Nationality:</Text>
          <Input
            variant="outline"
            placeholder="Nationality"
            value={passengerData.Nationality}
            onChange={(e) => handleInputChange('Nationality', e.target.value)}
          />
          <Text>Contact Number:</Text>
          <Input
            variant="outline"
            placeholder="Contact Number"
            value={passengerData.ContactNumber}
            onChange={(e) => handleInputChange('ContactNumber', e.target.value)}
          />
          <Text>Email:</Text>
          <Input
            variant="outline"
            type="email"
            placeholder="Email"
            value={passengerData.Email}
            onChange={(e) => handleInputChange('Email', e.target.value)}
          />
        </Grid>
         <Text>Total Fare:</Text>
          <Text fontSize="lg" fontWeight="bold">
            {totalFare}
          </Text>
        <Button colorScheme="teal" mt={4} onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default PassengerDetailsForm;


