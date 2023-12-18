
import React, { useState } from 'react';
import { Box, Button, Typography, Tabs, Tab, Paper } from '@mui/material';
// import { FlightTakeoff, FlightLand, ArrowRightAlt } from '@material-ui/icons';
import { FaPlaneDeparture, FaPlaneArrival, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import GoogleLogo from '..//..//assets/logos/GoogleLogo.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext } from '@mui/lab'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  firstBox: {
    width: '90%', // Adjusted width for the first box
    backgroundColor: 'lightblue',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
  },
  nestedBoxes: {
    display: 'flex',
    flexDirection: 'row', // Set to row
    justifyContent: 'space-between', // Adjusted to space-between for spacing
  },
  nestedBox: {
    width: '50%', // Adjusted width for each nested box
    backgroundColor: 'lightcoral', // Adjusted background color for clarity
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'relative',
    margin: theme.spacing(0, 1), // Add margin between nested boxes
  },
  secondBox: {
    width: '10%', // Adjusted width for the second box
    backgroundColor: 'lightgreen',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  button: {
    width: '100%',
    marginTop: theme.spacing(1),
    textAlign: 'right',
  },
}));


const FlightCard = ({ flightData, onSelect }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const segment = flightData.segments[0];
  const [selectedAirPrice, setSelectedAirPrice] = useState(null);
  const SearchID = useSelector((state) => state.flight.searchID);
  const ResultID = flightData.ResultID;
const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0); // State to track selected tab
  

  
     const [activeTab, setActiveTab] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

 const handleViewDetails = () => {
  setShowDetails((prevShowDetails) => !prevShowDetails);
  setActiveTab(0); // Set the default tab to open when "View Details" is clicked
};
  const calculateTotalAmount = () => {
    const baseFare = flightData.Fares[0].BaseFare;
    const tax = flightData.Fares[0].Tax;
    return baseFare + tax;
  };

  const handleSelect = async () => {
    try {
      console.log(flightData);
      console.log('Search ID (Before API Call):', SearchID);
      console.log('Selected Result ID (Before API Call):', ResultID);

      const requestBody = {
        SearchID: SearchID,
        ResultID: flightData.ResultID,
      };

      const response = await axios.post(
        'https://api.flyhub.com/api/v1/AirPrice',
        requestBody,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRoZWNpdHlmbHllcnNAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IjIwOTc4fDIxNTMxfDEwMy4xMjQuMjUxLjE0NywxMDMuMTI0LjI1MS4xNDciLCJuYmYiOjE2OTczMDk4NzgsImV4cCI6MTY5NzkxNDY3OCwiaWF0IjoxNjk3MzA5ODc4LCJpc3MiOiJodHRwczovL2FwaS5mbHlodWIuY29tIiwiYXVkIjoiYXBpLmZseWh1Yi5jb20ifQ.3An4oOBAWvkVz5V8-4dFxlSd8-J_NwYcixGe2bNT0pc`, // Replace with your actual token
            'Content-Type': 'application/json',
          },
        }
      );

      const responseData = response.data;
      console.log(responseData);

      history.push('/passenger-details');
      const totalFare = responseData?.Results[0]?.TotalFare ?? null;
      console.log('Total Fare:', totalFare);

      setSelectedAirPrice(totalFare);
      onSelect();
    } catch (error) {
      console.error('Error fetching airPrice:', error);
    }
  };

  return (
     <TabContext value={activeTab.toString()}>
   <div className={classes.container}>
      <Box className={classes.firstBox}>
        {/* Content for the first box */}
        First Box (90%)
        

        {/* Nested Boxes */}
        <Box className={classes.nestedBoxes}>
          {/* Nested Box 1 */}
          <Box className={classes.nestedBox}>
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'left'}}>
              {/* logo and texts */}
              <Box sx={{display:'flex'}}>
              <img src={GoogleLogo} alt="Girl in a jacket" width="50" height="60"></img>
              <Box>
                <Typography>dfds</Typography>
                <Typography>swddd</Typography>
              </Box>
              </Box>

              <Box>
                <Typography> sdfdsf</Typography>
                </Box>
              

            </Box>
            
          </Box>

          {/* Nested Box 2 */}
          <Box className={classes.nestedBox}>
            <h2>Nested Box 2 Content</h2>
            <p>Some details about Nested Box 2...</p>
          </Box>

          
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleViewDetails}
          className={classes.button}
          style={{ justifyContent: 'flex-end' }}
          endIcon={<ArrowDropDownIcon />}
        >
          View Details
        </Button>
       {/* Additional content shown when View Details button is clicked */}
          {showDetails && (
            <Paper>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                orientation="horizontal"
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                sx={{
                  width: 'auto',
                  borderTopLeftRadius: '5px',
                  borderTopRightRadius: '5px',
                  backgroundColor: 'white',
                  margin: 'auto',
                }}
              >
                <Tab label="Flight" value="0" />
                {/* Add other tabs as needed */}
              </Tabs>

              <TabPanel value="0">
                {/* Content for Flight Tab */}
                {/* ... */}
              </TabPanel>
              {/* Add other TabPanels for additional tabs */}
            </Paper>
          )}
      </Box>
      
      
      <Box className={classes.secondBox}>
        {/* Content for the second box */}
        Second Box (10%)
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          style={{ justifyContent: 'flex-end' }}
          startIcon={<ArrowForwardIcon />}
        >
          Select
        </Button>
      </Box>
    </div>
    </TabContext>
  );
};

const FlightInfoItem = ({ label, value }) => (
  <Box flex="1 1 50%" mb={2} display="flex" alignItems="center">
    <Typography>{label}:</Typography>
    <Typography ml={1} variant="body2">
      {value}
    </Typography>
  </Box>
);

export default FlightCard;



// import React, { useState } from 'react';
// import { Box, Button, Link, Text } from '@chakra-ui/react';
// import { FaPlaneDeparture, FaPlaneArrival, FaArrowRight } from 'react-icons/fa';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// // import { setFlightData } from '../../redux/reducers/flightSlice';
// import { useHistory } from 'react-router-dom';

// const FlightCard = ({ flightData,onSelect }) => {
//   const dispatch = useDispatch();
//    const history = useHistory();
//   const segment = flightData.segments[0];
// const [selectedAirPrice, setSelectedAirPrice] = useState(null);
// const SearchID = useSelector(state => state.flight.searchID); // Use selector to get SearchID from Redux store
//   const ResultID = flightData.ResultID;

//   // Calculate total amount (base fare + tax)
//   const calculateTotalAmount = () => {
//     const baseFare = flightData.Fares[0].BaseFare;
//     const tax = flightData.Fares[0].Tax;
//     return baseFare + tax;
//   };

// const handleSelect = async () => {
//     try {
//       console.log(flightData)
//       console.log('Search ID (Before API Call):', SearchID);
//     console.log('Selected Result ID (Before API Call):', ResultID);
//       const requestBody = {
//         SearchID: SearchID,
//         ResultID: flightData.ResultID,
//       };

//       const response = await axios.post('https://api.flyhub.com/api/v1/AirPrice', requestBody, {
//         headers: {
//           Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRoZWNpdHlmbHllcnNAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IjIwOTc4fDIxNTMxfDEwMy4xMjQuMjUxLjE0NywxMDMuMTI0LjI1MS4xNDciLCJuYmYiOjE2OTczMDk4NzgsImV4cCI6MTY5NzkxNDY3OCwiaWF0IjoxNjk3MzA5ODc4LCJpc3MiOiJodHRwczovL2FwaS5mbHlodWIuY29tIiwiYXVkIjoiYXBpLmZseWh1Yi5jb20ifQ.3An4oOBAWvkVz5V8-4dFxlSd8-J_NwYcixGe2bNT0pc`,
//           'Content-Type': 'application/json'
//         }
//       });
//       const responseData = response.data;
//       console.log(responseData);
//       // dispatch(setFlightData(responseData));
//       history.push('/passenger-details');
//       const totalFare = responseData?.Results[0]?.TotalFare ?? null;
//     console.log('Total Fare:', totalFare);

//     setSelectedAirPrice(totalFare);
//       onSelect(); // Call the onSelect function passed down from FlightResults component
    
//     } catch (error) {
//       console.error('Error fetching airPrice:', error);
//     }
//   };

  

//   return (
//     <Box
//      borderWidth="1px"
//       borderRadius="md"
//       p={4}
//       mb={4}
//       height="100px"
//       backgroundColor="lightgray"
//       color="black"
//       boxShadow="md"
//       display="flex"
//       flexDirection="row"
//       justifyContent="space-between"
//       alignItems="center"
//       overflow="hidden"
//       position="relative"
//     >
//       {/* flight info box */}
//       <Box display="flex" flexWrap="wrap" flex="1">
//         {/* <FlightInfoItem label="Operating Carrier" value={segment.Airline ? segment.Airline.OperatingCarrier : 'N/A'} />
//         <FlightInfoItem label="Flight Number" value={segment.Airline ? segment.Airline.FlightNumber : 'N/A'} />
//         <FlightInfoItem label="Airline Code" value={segment.Airline ? segment.Airline.AirlineCode : 'N/A'} />
//         <FlightInfoItem label="Airline Name" value={segment.Airline ? segment.Airline.AirlineName : 'N/A'} />
//         <FlightInfoItem label="Cabin Class" value={segment.Airline ? segment.Airline.CabinClass : 'N/A'} />
//         <FlightInfoItem label="Departure Airport" value={segment.Origin ? segment.Origin.Airport.AirportName : 'N/A'} />
//         <FlightInfoItem label="Destination Airport" value={segment.Destination ? segment.Destination.Airport.AirportName : 'N/A'} />
//         <FlightInfoItem label="Origin Airport Code" value={segment.Origin ? segment.Origin.Airport.AirportCode : 'N/A'} />
//         <FlightInfoItem label="Departure Time" value={segment.Origin ? segment.Origin.DepTime : 'N/A'} icon={<FaPlaneDeparture />} />
//         <FlightInfoItem label="Arrival Time" value={segment.Destination ? segment.Destination.ArrTime : 'N/A'} icon={<FaPlaneArrival />} /> */}
//         <FlightInfoItem label="Journey Duration" value={segment.JourneyDuration ? `${segment.JourneyDuration} minutes` : 'N/A'} />
//         <FlightInfoItem label="Aircraft" value={segment.Equipment ? `${segment.Equipment}` : 'N/A'} />
//         {/* View Details button */}
//       <Box
//         width="100%"
//         backgroundColor="blue"
//         color="white"
//         textAlign="right"
//         position="absolute"
//         bottom="0"
//         left="0"
       
        
        
//       >
//         <Button
//           variant="outline"
//           colorScheme="blue"
//           rightIcon={<FaArrowRight />}
//           width="100%"
//           onClick={() => {
//             // Add functionality for viewing details here
//             // You can navigate to a details page or show a modal, for example.
//           }}
//         >
//           View Details
//         </Button>
//       </Box>
//       </Box>
//       {/* Right-side box */}
//       <Box
//          width="200px"
//         height="100%"
//         backgroundColor="teal"
//         color="white"
        
//         textAlign="center"
//         position="absolute"
//         bottom="0"
//         right="0"
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
        
        
        
//       >
//         <Text mb={2} fontWeight="bold">
//           Total Amount:
//         </Text>
//         <Text fontSize="lg">{calculateTotalAmount()} BDT</Text>
//         <Button onClick={handleSelect} colorScheme="teal" mt={-3} width="100%">
//           Select{' '}
//           <Box as={FaArrowRight} ml={2} /> {/* Assuming FaArrowRight is your right arrow icon */}
//         </Button>
//       </Box>

       
//     </Box>

//   );
// };

// const getAirlineLogoUrl = async (airline) => {
//   try {
//     // Make a request to the backend endpoint
//     const response = await axios.get(`http://localhost:5000/api/airlineLogo/${encodeURIComponent(airline)}`);
//     return response.data.logo || 'default_logo_url';
//   } catch (error) {
//     console.error('Error fetching airline logo from backend:', error);
//     return 'default_logo_url';
//   }
// };

// const FlightInfoItem = ({ label, value, icon }) => (
//   <Box flex="1 1 50%" mb={2} display="flex" alignItems="center">
//     {icon && icon}
//     <Text ml={icon ? 2 : 0} isTruncated>
//       <strong>{label}:</strong> {value}
//     </Text>
//   </Box>
// );

// export default FlightCard;
