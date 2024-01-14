import React, { useEffect, useState,useRef } from 'react';
import { Grid, Paper, Typography, Radio, RadioGroup, FormControlLabel, Button, Stack, Popover, TextField, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
// import { fetchFlightResults } from '..//../redux/actions/newFlightAction';
import Divider from '@mui/material/Divider';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import fetchAirports from '../../services/api';
import { makeStyles } from '@mui/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useHistory } from 'react-router-dom';
import { setFlightSearchData } from '../../redux/reducers/flightSlice';
import dayjs from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import '..//../index.css'
import '@fontsource/poppins';
import axios from 'axios';
import { fetchFlightResults } from '../../redux/reducers/flightSlice';
// First airport object from the airports array
  const airports = [
  {
    code: 'DAC',
    city: 'Dhaka',
    country: 'Bangladesh',
    name: 'Hazrat Shahjalal International Airport',
  },
  {
    code: 'JFK',
    city: 'New York',
    country: 'United States',
    name: 'John F. Kennedy International Airport',
  },
  
  // You can add more airport data as needed.
];



const useStyles = makeStyles((theme) => ({

  
  popover: {
    backgroundColor: '#fff',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    transition: 'opacity 0.3s ease-in-out', // Add transition for opacity
    opacity: 1, // Start with opacity 1 for the fade-in effect
    '&:hover': {
      opacity: 1, // Ensure opacity stays 1 on hover
    },
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(0.5),
    border: '1px solid #ccc',
    borderRadius: theme.spacing(0.5),
  },
  airportItem: {
    cursor: 'pointer',
    marginBottom: theme.spacing(1),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));


  const gridContainerStyle = {
    // borderRadius: '10px', // Border radius of 10px
    backgroundColor: 'white', // Background
    overflow: 'hidden', // Optional: To ensure children elements don't overflow outside the border radius
    // padding: '50px',
    // marginTop: '5px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Custom box-shadow to replace Paper's default shadow
    margin:'0',
    
    borderBottomLeftRadius:'5px',
    borderBottomRightRadius:'5px',
    

    
  
  };

  const paperStyle = {
    paddingLeft: '10px', // Ensure there's no extra padding interfering with the border-radius
    margin: 0, // Ensure there's no margin interfering with the border-radius
    display:'flex', 
    alignItems:'center',
    
    
  };

export const SearchForm =  ({ searchButtonLabel}) => {
 const [selectedOption, setSelectedOption] = useState('oneway');
  const [selectedFromAirport, setSelectedFromAirport] = useState(airports[0]);
   const [selectedToAirport, setSelectedToAirport] = useState(airports[1]);
  const [searchedAirports, setSearchedAirports] = useState([]); 
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [fromAnchorEl, setFromAnchorEl] = useState(null); // Separate state for "From" Popover
  const [toAnchorEl, setToAnchorEl] = useState(null); 
const classes = useStyles();
const [selectedDate, setSelectedDate] = useState(dayjs().add(3, 'day')); // Default date: current date + 3 days
  const [dayOfWeek, setDayOfWeek] = useState(selectedDate.format('dddd')); 
  const [dAnchorEl, setDanchorEl] = useState(null);
  const [returnAnchorEl, setReturnAnchorEl] = useState(null);
const [returnDate, setReturnDate] = useState(dayjs().add(7, 'day')); // Default return date: current date + 7 days
const [returnDayOfWeek, setReturnDayOfWeek] = useState('');
const [returnDatePopoverOpen, setReturnDatePopoverOpen] = useState(false);
const [adults, setAdults] = useState(1);
const [children, setChildren] = useState(0);
const [infants, setInfants] = useState(0);
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedClass, setSelectedClass] = useState('Economy');
const dispatch = useDispatch();
const history = useHistory();

const [formData, setFormData] = useState({
    AdultQuantity: 1,
    ChildQuantity: 0,
    InfantQuantity: 0,
    EndUserIp: "103.124.251.147",
    JourneyType: "1",
    Segments: [
      {
        Origin: "DAC",
        Destination: "JSR",
        CabinClass: "1",
       DepartureDateTime: "2023-10-20",
      },
    ],
  });


 

const handleReturnDateChange = (date) => {
  // Close the return date popover after selecting a date
  setReturnAnchorEl(null);

  // Update the return date with the selected date from the return calendar
  setReturnDate(date);

  // Get the day of the week for the selected return date
  const dayOfWeek = date.format('dddd');

  // Update the state with the day of the week for the return date
  setReturnDayOfWeek(dayOfWeek);

  // You can perform additional actions with the selected return date if needed
};



const handleClassChange = (event) => {
  setSelectedClass(event.target.value);
};
const handleRPopoverClose = () => {
    setReturnDatePopoverOpen(false);
    setReturnAnchorEl(null);
  };

   const handleDPopoverClose = () => {
    setDanchorEl(null);
  };
const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};

const handleDepartureDateChange = (date) => {
  setSelectedDate(date);
  setDayOfWeek(date.format('dddd'));
  setDanchorEl(null); // Close the Popover after selecting a date
};


  const handleDPopoverClick = (event) => {
  setDanchorEl(event.currentTarget);
};

   const handlePopoverClose = () => {
    setFromAnchorEl(null);
    setToAnchorEl(null);
  };

  const handleFromAirportSelect = (airport) => {
    setSelectedFromAirport(airport);
    handlePopoverClose();
  };
const handleToAirportSelect = (airport) => {
  setSelectedToAirport(airport);
  handlePopoverClose();
};

 const handlePopoverClick = (event, anchor) => {
  if (anchor === 'from') {
    setFromAnchorEl(event.currentTarget);
  } else if (anchor === 'to') {
    setToAnchorEl(event.currentTarget);
  } else if (anchor === 'return') {
    setReturnAnchorEl(event.currentTarget);
    setSelectedOption('return'); // Set selected option to 'return'
  }
};

 const handleRPopoverClick = (event) => {
    setReturnDatePopoverOpen(true);
    setReturnAnchorEl(event.currentTarget);
    setSelectedOption('return'); // Set selected option to 'return' when clicking on the Return div
  };

  const handleSearchQueryChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value); // Update the searchQuery state as you type
    console.log(`Search query: ${value}`);
  };

  const open = Boolean(anchorEl);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFetchAirports = async () => {
    try {
      const airportData = await fetchAirports(searchQuery);
      console.log('API response:', airportData);
      // Update state or perform actions with the fetched airport data
    
      // Update searchedAirports with the fetched data
      setSearchedAirports(airportData);} catch (error) {
      console.error(error.message);
    }
  };
useEffect(() => {
  if (!searchQuery) {
    // If searchQuery is empty, clear the searchedAirports and return to stop useEffect
    setSearchedAirports([]);
    return;
  }

  // Only fetch data when searchQuery is not empty
  handleFetchAirports();
}, [searchQuery]);

 const handleFormData = async () => {
    // Create a new object to hold the updated form data
    const updatedFormData = {
      ...formData, // Spread the existing form data to keep other properties unchanged
      AdultQuantity: adults, // Update the adult quantity with the current state value
      ChildQuantity: children, // Update the children quantity with the current state value
      InfantQuantity: infants, // Update the infants quantity with the current state value
      JourneyType: selectedOption === 'oneway' ? '1' : '2', // Update the journey type based on selectedOption state
      Segments: [
        {
          Origin: selectedFromAirport.code,
          Destination: selectedToAirport.code,
          CabinClass: selectedClass === 'Economy' ? '1' : '2', // Assuming '1' represents Economy and '2' represents Business class
          DepartureDateTime: selectedDate.format('YYYY-MM-DD'), // Format the date according to the API's expected format
        },
      ],
    };
try {
      // Dispatch the updated form data to Redux using the Thunk action
      dispatch(fetchFlightResults(updatedFormData));

      // Use history.push to navigate to the FlightResults page with the form data
      history.push({
        pathname: '/flight-results',
      });
    } catch (error) {
      console.error('Error dispatching thunk action:', error.message);
    }
  };
  
  return (



<>
<Grid container   style={gridContainerStyle}>
      {/* First Inner Grid */}
      <Grid item>
       
            <RadioGroup
            sx={{paddingLeft:'20px'}}
            row
            aria-label="journey-type"
            name="journey-type"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <FormControlLabel value="oneway"  control={<Radio color=  'warning' />} label="One-way" />
            <FormControlLabel value="return" control={<Radio />} label="Return" />
            <FormControlLabel value="multicity" control={<Radio />} label="Multi-city" />
          </RadioGroup>
        
      </Grid>

      {/* Second Inner Grid (Container for items 1, 2, and 3) */}
      <Grid container spacing={1} style={{paddingBottom:'60px',width:'99%'}}>
        {/* item 1 */}
        <Grid item sm={12} xs={12} lg={6} md={6} direction='row'>
          <Box  style={paperStyle} >
             <Box onClick={(event) => handlePopoverClick(event, 'from')}  style={{ border:'1px solid #0067FF',borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px', width: '50%',height: '90px', backgroundColor: 'white',cursor: 'pointer',marginRight:'-10px',borderRight:'none'}}>
        <Stack direction="column"
  justifyContent="flex-start"
  alignItems="flex-start"
   style={{marginLeft:'10px',}}>
             
               <Typography style={{fontSize:'1em',display:'flex'}}
         >
                <FlightTakeoffIcon style={{color:'#0067FF'}} />
                <Typography>From</Typography>
              </Typography >
              <Typography  style={{fontWeight:'bold',fontSize:'20px'}} >
                {selectedFromAirport ? `${selectedFromAirport.city} - ${selectedFromAirport.code}` : 'Select an Airport'}
              </Typography>
              <Typography sx={{
          fontFamily: 'Poppins, sans-serif', fontSize:'12px' // Specify the font-family name defined in @font-face
        }}>
                {selectedFromAirport ? selectedFromAirport.name : 'Select an Airport'}
              </Typography>
            </Stack>

              </Box>

               {/* <Divider orientation="vertical" flexItem  /> */}
 <SwapHorizontalCircleIcon style={{ borderRadius: '50%',zIndex:'1' ,fontSize:'20px'}}  />

               <Popover
    open={Boolean(fromAnchorEl)}
        anchorEl={fromAnchorEl}
        onClose={handlePopoverClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transitionDuration={300} // Optional: Set transition duration for the fade effect
    >
      <div className={classes.popover}>
        <input
          type="text"
          placeholder="Select an Airport"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className={classes.input}
        />
        {searchedAirports.map((airport, index) => (
          <div
            key={`${airport.code}-${index}`}
            onClick={() => handleFromAirportSelect(airport)}
            className={classes.airportItem}
          >
            {`${airport.name} (${airport.code}), ${airport.city}, ${airport.country}`}
          </div>
        ))}
      </div>
    </Popover>


    <Box onClick={(event) => handlePopoverClick(event, 'to')}  style={{border:'1px solid #0067FF',borderBottomRightRadius:'5px',borderTopRightRadius:'5px', width: '50%',height: '90px', backgroundColor: 'white',cursor: 'pointer', marginLeft:'-10px',}}>
                
                 <Stack direction="column"
  justifyContent="flex-start"
  alignItems="baseline"
 style={{marginLeft:'10px'}}>
               <Typography style={{fontSize:'1em',display:'flex'}}>
                <FlightLandIcon style={{color:'#0067FF'}} />
                <Typography>To</Typography>
              </Typography>
              <Typography  style={{fontWeight:'bold',fontSize:'20px'}}>
                {selectedToAirport ? `${selectedToAirport.city} - ${selectedToAirport.code}` : 'Select an Airport'}
              </Typography>
              <Typography style={{fontSize:'12px'}}>
                {selectedToAirport ? selectedToAirport.name : 'Select an Airport'}
              </Typography>
            </Stack>

              </Box>
             <Popover
      open={Boolean(toAnchorEl)}
        anchorEl={toAnchorEl}
        onClose={handlePopoverClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transitionDuration={300} // Optional: Set transition duration for the fade effect
    >
      <div className={classes.popover}>
        <input
          type="text"
          placeholder="Select an Airport"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className={classes.input}
        />
        {searchedAirports.map((airport, index) => (
          <div
            key={`${airport.code}-${index}`}
            onClick={() => handleToAirportSelect(airport)}
            className={classes.airportItem}
          >
            {`${airport.name} (${airport.code}), ${airport.city}, ${airport.country}`}
          </div>
        ))}
      </div>
    </Popover>
          </Box>
        </Grid>

        {/* item 2 Departure and  return */}
        
        <Grid item sm={12} xs={12} lg={4} md={4}>
          <Box  style={paperStyle}>
             <Box onClick={handleDPopoverClick} style={{ borderRight:'none', border:'1px solid #0067FF',borderBottomLeftRadius:'5px',borderTopLeftRadius:'5px', width: '50%', height: '90px', backgroundColor: 'white', float: 'left',cursor:'pointer', boxSizing:'border-box' }}>
    <Box style={{display:'flex',}}>
       <CalendarMonthIcon style={{color:'#0067FF'}}/>
      <Typography>Travel Date</Typography>

   </Box>
    
   
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       <Typography style={{fontSize:'22px',fontWeight:'bold'}}>{selectedDate.format('DD MMM YY')}</Typography>
         <Typography>{dayOfWeek}</Typography>
         
        
        
        </LocalizationProvider>
  </Box>

  <Popover
  open={Boolean(dAnchorEl)}
  anchorEl={dAnchorEl}
  onClose={handleDPopoverClose} // Close the Popover when it is clicked outside
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
>
  <div className={classes.popover}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={selectedDate}
        onChange={handleDepartureDateChange}
        renderInput={(props) => <TextField {...props} />}
        adapter={AdapterDayjs}
      />
    </LocalizationProvider>
  </div>
</Popover>


         {/* return date */}

  <Box onClick={(event) => handleRPopoverClick(event)} style={{ width: '50%', height: '90px', backgroundColor: 'white', float: 'left', boxSizing: 'border-box', border:'1px solid #0067FF',borderTopRightRadius:'5px' ,borderBottomRightRadius:'5px', borderLeft:'none', cursor:'pointer' }}>
  <Box style={{ display: 'flex',  }}>
    <CalendarMonthIcon style={{color:'#0067FF'}} />
   <Typography >Return</Typography>
   
   </Box>
   <Typography style={{fontSize:'22px',fontWeight:'bold'}} >{returnDate.format('DD MMM YY')}</Typography>
   <Typography>{returnDayOfWeek}</Typography>
 </Box>

<Popover
  open={Boolean(returnAnchorEl)}
  anchorEl={returnAnchorEl}
  onClose={handleRPopoverClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
>
  <div className={classes.popover}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={returnDate} // Use the returnDate state variable as the value for the DateCalendar
        onChange={handleReturnDateChange} // Call handleReturnDateChange when the user selects a return date
        renderInput={(props) => <TextField {...props} />}
        adapter={AdapterDayjs}
      />
    </LocalizationProvider>
  </div>
</Popover>


          </Box>
        </Grid>

        {/* item 3 */}
        <Grid item sm={12} xs={12} lg={2} md={2}>
          <Box  style={paperStyle}>
             {/* Travller class */}
           <Box
  onClick={openModal} 
  style={{ width: '100%', height:'90px', backgroundColor: 'white', cursor: 'pointer',border:'1px solid #0067FF',borderRadius:'5px',boxSizing: 'border-box',}}
>
  
  <Typography>Traveller & Class</Typography>
  <Typography style={{fontSize:'22px',fontWeight:'bold'}}>{`${adults + children + infants} Person${adults + children + infants > 1 ? 's' : ''}`}</Typography>
  <Typography style={{fontStyle:'italic',fontWeight:'bold'}}>{selectedClass}</Typography>
  
</Box>

<Popover
  open={isModalOpen}
  onClose={closeModal}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
>
  <Box style={{ padding: 20, minWidth: 200,boxSizing:'border-box' }}>
    <Box style={{ marginBottom: 10 }}>
      <Typography>Adults</Typography>
      <Button onClick={() => setAdults(adults - 1)}>-</Button>
      {adults}
      <Button onClick={() => setAdults(adults + 1)}>+</Button>
    </Box>
    <Divider style={{ margin: '8px 0' }} />
    <Box style={{ marginBottom: 10 }}>
      <Typography>Children</Typography>
      <Button onClick={() => setChildren(children - 1)}>-</Button>
      {children}
      <Button onClick={() => setChildren(children + 1)}>+</Button>
    </Box>
    <Divider style={{ margin: '8px 0' }} />
    <Box style={{ marginBottom: 10 }}>
      <Typography>Infants</Typography>
      <Button onClick={() => setInfants(infants - 1)}>-</Button>
      {infants}
      <Button onClick={() => setInfants(infants + 1)}>+</Button>
    </Box>
<Divider style={{ margin: '8px 0' }} />
    <RadioGroup
    row
    aria-label="class"
    name="class"
    value={selectedClass}
    onChange={handleClassChange}
  >
    <FormControlLabel value="Economy" control={<Radio />} label="Economy" />
    <FormControlLabel value="Business" control={<Radio />} label="Business" />
  </RadioGroup>
    <Button variant="contained" color="primary"  onClick={closeModal}>
      Done
    </Button>
  </Box>
</Popover>
          </Box>

                  
        </Grid>
         
      </Grid>
      
    </Grid>

    <Button 
          
        onClick={handleFormData}


    
        
          variant="contained"
          color="primary"
          style={{
            position: 'relative',
            top: '-30px',
            zIndex: 1,
            width:'20%',
            height:'60px',
            textTransform:'none',
            backgroundColor:'#0067FF',
            fontWeight:'bold',
            fontSize:'22px',
            
          }}
        >
          {searchButtonLabel || 'Search'}
        </Button>
</>


  );
};

export default SearchForm;
