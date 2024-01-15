import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Tabs, Tab, Paper } from "@mui/material";
// import { FlightTakeoff, FlightLand, ArrowRightAlt } from '@material-ui/icons';
import { FaPlaneDeparture, FaPlaneArrival, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import GoogleLogo from "..//..//assets/logos/GoogleLogo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext } from "@mui/lab";
import { selectFlightSearchData } from "../../redux/reducers/flightSlice";
import TabComponent from "../tabComponent/TabComponent";
import FlightIcon from '@mui/icons-material/Flight';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CircleIcon from '@mui/icons-material/Circle';
import Skeleton from "@mui/material/Skeleton";


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor:'lightgray',
    display: "flex",
    flexDirection: "row",
    
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  firstBox: {
    width: "90%", // Adjusted width for the first box
    
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
  },
  nestedBoxes: {
    display: "flex",
    flexDirection: "row", // Set to row
    justifyContent: "space-between", // Adjusted to space-between for spacing
  },
  nestedBox: {
    width: "50%", // Adjusted width for each nested box
    
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    position: "relative",
    margin: theme.spacing(0, 1), // Add margin between nested boxes
  },
  secondBox: {
    width: "10%", // Adjusted width for the second box
    
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  button: {
    width: "100%",
    marginTop: theme.spacing(1),
    textAlign: "right",
  },
  
  
 
}));

export const FlightCard = ({ flightData, onSelect, isLoading }) => {
 
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
const [airlineLogoUrl, setAirlineLogoUrl] = useState(null);

  useEffect(() => {
    // Fetch the logo URL based on AirlineCode
    const fetchLogoUrl = async () => {
      try {
        const response = await axios.get(`/api/airline/${segment.Airline.AirlineCode}`);
        setAirlineLogoUrl(response.data.logoUrl); // Adjust based on your actual response structure
      } catch (error) {
        console.error('Error fetching airline logo:', error);
      }
    };

    // Check if AirlineCode is available and fetch the logo
    if (segment.Airline && segment.Airline.AirlineCode) {
      fetchLogoUrl();
    }
  }, [segment.Airline]);


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
const calculateDuration = () => {
    const depTime = new Date(segment.Origin.DepTime);
    const arrTime = new Date(segment.Destination.ArrTime);

    const durationInMinutes = (arrTime - depTime) / (1000 * 60); // Convert milliseconds to minutes

    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;

    if (hours > 0) {
      return `${hours}H ${minutes}M`;
    } else {
      return `${minutes}M`;
    }
  };


  const handleSelect = async () => {
    try {
      console.log(flightData);
      console.log("Search ID (Before API Call):", SearchID);
      console.log("Selected Result ID (Before API Call):", ResultID);

      const requestBody = {
        SearchID: SearchID,
        ResultID: flightData.ResultID,
      };

      const response = await axios.post(
        "https://api.flyhub.com/api/v1/AirPrice",
        requestBody,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRoZWNpdHlmbHllcnNAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IjIwOTc4fDIxNTMxfDEwMy4xMjQuMjUxLjE0NywxMDMuMTI0LjI1MS4xNDciLCJuYmYiOjE2OTczMDk4NzgsImV4cCI6MTY5NzkxNDY3OCwiaWF0IjoxNjk3MzA5ODc4LCJpc3MiOiJodHRwczovL2FwaS5mbHlodWIuY29tIiwiYXVkIjoiYXBpLmZseWh1Yi5jb20ifQ.3An4oOBAWvkVz5V8-4dFxlSd8-J_NwYcixGe2bNT0pc`, // Replace with your actual token
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = response.data;
      console.log(responseData);

      history.push("/passenger-details");
      const totalFare = responseData?.Results[0]?.TotalFare ?? null;
      console.log("Total Fare:", totalFare);

      setSelectedAirPrice(totalFare);
      onSelect();
    } catch (error) {
      console.error("Error fetching airPrice:", error);
    }
  };

  return (



    <TabContext value={activeTab.toString()}>




      <div className={classes.container}>

        <Box className={classes.firstBox}>
          {/* Content for the first box */}
           <div style={{ display: 'flex' }}>
      {/* First Box */}
      <Box
        style={{
         
          width: '50%',
         
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box
          style={{
            
             
            flex: '8',
           
            display: 'flex',
            justifyContent:'space-between',
            alignItems:'center',
            

          }}
        >
          <Box sx={{justifyContent:'center'}} >
            {/* box 1.1 */}
            <Box sx={{display:'flex'}}>
              
              <Box>
                      {/* airline logo here */}
                      {isLoading ? (
                        <Skeleton variant="circular" width={100} height={100} />
                      ) : (
                        airlineLogoUrl && (
                          <img
                            src={airlineLogoUrl}
                            alt="Airline Logo"
                            width="90"
                            height="90"
                          />
                        )
                      )}
                    </Box>
              <Box sx={{}}>
                {/* airline code + flight number */}
                <Box sx={{display:"flex"}}>
                <Typography >
  <FlightInfoItem isLoading={isLoading}   valueStyle={{ fontWeight: 'bold' }} value={segment.Airline ? segment.Airline.AirlineCode : 'N/A'} />
</Typography>

<Typography >
  <FlightInfoItem isLoading={isLoading} valueStyle={{ fontWeight: 'bold' }} value={segment.Airline ? segment.Airline.FlightNumber : 'N/A'} />
</Typography>
                </Box>

                <Box><Typography><FlightInfoItem isLoading={isLoading} valueStyle={{fontWeight:'bold'}}   label="Aircraft: " value={segment.Equipment ? `${segment.Equipment}` : 'N/A'} /></Typography></Box>
        
              </Box>
              
            </Box>

            <Box>
              <Typography>
                <FlightInfoItem isLoading={isLoading}    value={segment.Airline ? segment.Airline.AirlineName : 'N/A'} />
              </Typography>
              
              </Box>

          </Box>
         
          <Box>

          </Box>
        </Box>
        <Box
          style={{
            
           display: 'flex',
           flexDirection: 'column',
            flex: '2',
           
            
           
            justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
          }}
        >
           <Typography> <FlightInfoItem isLoading={isLoading}  valueStyle={{color:'blue',fontWeight:'bold',fontSize:'2rem',}}  value={segment.Origin ? segment.Origin.Airport.CityName : 'N/A'} /></Typography>
          <Typography> <FlightInfoItem isLoading={isLoading}  value={segment.Origin ? segment.Origin.Airport.CityCode : 'N/A'} /></Typography>
        </Box>
      </Box>

      {/* Second Box */}
      <Box
        style={{
          
          width: '50%',
          
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          
        }}
      >
        <Box
          style={{
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
            flex: '1',
            
            
          }}
        >
          <Box >
            {/* time */}
            <Typography> <FlightInfoItem isLoading={isLoading}  valueStyle={{fontWeight: 'bold',fontSize:'2rem'}}
             
              value={
                segment.Destination
                  ? new Date(segment.Origin.DepTime).toLocaleTimeString(
                      'en-US',
                      {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                      }
                    )
                  : 'N/A'
              }
              icon={<FaPlaneArrival />}
            /></Typography>
          </Box>

         
        </Box>
       <Box
  style={{
    
    flex: '1',
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <div >
    
    
      
   
  </div>
  <div  >
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <FlightIcon style={{ transform: 'rotate(90deg)', }} />
      <MoreHorizIcon />   
    <MoreHorizIcon style={{ marginLeft:'-5px', }} />   
   <CircleIcon/>
   </Box>
    
    <Box >
            {/* duration */}
           
            <FlightInfoItem isLoading={isLoading}  label={'Duration: '}
                      value={calculateDuration()}
                      icon={<FaPlaneArrival />}
                    />
          </Box>
  </div>

</Box>

        <Box
          style={{
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
            flex: '1',
           
          }}
        >
          <Typography> <FlightInfoItem isLoading={isLoading}  valueStyle={{fontWeight: 'bold',fontSize:'2rem'}}
             
              value={
                segment.Destination
                  ? new Date(segment.Destination.ArrTime).toLocaleTimeString(
                      'en-US',
                      {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                      }
                    )
                  : 'N/A'
              }
              icon={<FaPlaneArrival />}
            />
            </Typography>
        </Box>
        <Box
          style={{
            
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography>
            <FlightInfoItem isLoading={isLoading} valueStyle={{fontSize:'2rem',color:'blue',fontWeight:'bold'}} value={segment.Destination ? segment.Destination.Airport.CityName : 'N/A'} />
            <FlightInfoItem value={segment.Destination ? segment.Destination.Airport.CityCode : 'N/A'} />
          </Typography>
        </Box>
      </Box>
    </div>
<Button
            variant='contained'
            color='primary'
            onClick={handleViewDetails}
            className={classes.button}
            style={{ justifyContent: "flex-end" }}
            endIcon={<ArrowDropDownIcon />}>
            View Details
          </Button>
         
        </Box>

        <Box className={classes.secondBox}>
          {/* Content for the second box */}
          <Typography>
            <Typography fontSize='20px' fontWeight='bold'>BDT {calculateTotalAmount()} </Typography>
          </Typography>
          
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            style={{ justifyContent: "flex-end" }}
            endIcon={<ArrowForwardIcon />}>
            Select
          </Button>


    
         
        </Box>
      </div>


       {/* Additional content shown when View Details button is clicked */}
          {showDetails && (
            <TabComponent
          activeTab={activeTab}
          handleTabChange={handleTabChange}
          segment={flightData.segments[0]}
        />
          )}
    </TabContext>
  );
};

export const FlightInfoItem = ({ label, value, valueStyle, isLoading }) => (
  <Box flex="1 1 50%" display="flex" alignItems="center">
    <Typography>{label}</Typography>
    {isLoading ? (
      
      <Skeleton width={90} height={30} style={{ marginLeft: 10 }} />
    ) : (
      <Typography style={valueStyle}>{value}</Typography>
    )}
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
