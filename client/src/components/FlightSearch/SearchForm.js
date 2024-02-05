import React, { useEffect, useState,useRef } from 'react';
import { Grid, Paper, Typography, Radio, RadioGroup, FormControlLabel, Button, Stack, Popover, TextField, Box, CircularProgress, Backdrop, IconButton, Icon } from '@mui/material';
import { useDispatch } from 'react-redux';
// import { fetchFlightResults } from '..//../redux/actions/newFlightAction';
import Divider from '@mui/material/Divider';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SyncIcon from '@mui/icons-material/Sync';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import fetchAirports from '../../services/api';
import { makeStyles } from '@mui/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import '..//../index.css'
import '@fontsource/poppins';
import { fetchFlightResults } from '../../redux/reducers/flightSlice';
import './style.css'



// First airport object from the airports array
  const airports = [
  {
    code: 'DAC',
    city: 'Dhaka',
    country: 'Bangladesh',
    name: 'Hazrat Shahjalal International Airport',
  },
  {
    code: 'JSR',
    city: 'Jashore',
    country: 'Bangladesh',
    name: 'Jashore Airport',
  },
  
  // You can add more airport data as needed.
];



const useStyles = makeStyles((theme) => ({
backdrop:{
  zIndex: theme.zIndex.drawer + 1,
  color: 'red',
  backgroundColor:'rgba(0,0,0,0.4)',
  backdropFilter:'blur(3px)',
}
  ,
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
    backgroundColor: 'rgba(255,255,255,0.5)', // Background
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
const [isFetching, setIsFetching] = useState(false);

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

function CustomIconButton({ value, selectedValue, onChange, Icon, label }) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: '16px', // Adjust spacing as needed
        }}
      >
        <IconButton
          color={selectedValue === value ? 'primary' : 'default'}
          onClick={() => onChange(value)}
          aria-label={label}
        >
          <Icon />
        </IconButton>
        <Typography variant="caption">{label}</Typography>
      </Box>
    );
  }


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

  const handleOptionChange = (newValue) => {
    setSelectedOption(newValue);
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
    let updatedFormData = {
      AdultQuantity: adults, // Assuming you have a state for adults
      ChildQuantity: children, // Assuming you have a state for children
      InfantQuantity: infants, // Assuming you have a state for infants
      EndUserIp: "103.124.251.147", // This can be dynamically obtained or kept static as in your example
      JourneyType: selectedOption === 'oneway' ? '1' : '2', // '1' for one-way, '2' for return
      Segments: [
        {
          Origin: selectedFromAirport.code,
          Destination: selectedToAirport.code,
          CabinClass: selectedClass === 'Economy' ? '1' : '2', // Assuming '1' for Economy and '2' for Business class
          DepartureDateTime: selectedDate.format('YYYY-MM-DD'),
        },
      ],
    };

    // If the journey type is 'return', add the return segment to the formData
    if (selectedOption === 'return') {
      updatedFormData.Segments.push({
        Origin: selectedToAirport.code,
        Destination: selectedFromAirport.code,
        CabinClass: selectedClass === 'Economy' ? '1' : '2', // Same assumption as above
        DepartureDateTime: returnDate.format('YYYY-MM-DD'),
      });
    }

    try {
      setIsFetching(true);
      // Dispatch the updated form data to Redux using the thunk action
      await dispatch(fetchFlightResults(updatedFormData));

      // Use history.push to navigate to the FlightResults page with the form data
      history.push('/flight-results');
    } catch (error) {
      console.error('Error dispatching thunk action:', error.message);
    } finally {
      // Set the backdrop to be invisible, regardless of success or failure
      setIsFetching(false);
    }
};

  
  return (



<>

<Grid container    style={gridContainerStyle}>
      {/* First Inner Grid */}
      <Grid item>
       
           <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '20px'
      }}
      aria-label="journey-type"
      name="journey-type"
    >
      <CustomIconButton
        value="oneway"
        selectedValue={selectedOption}
        onChange={() => handleOptionChange('oneway')}
        Icon={KeyboardBackspaceIcon}
        label="One-way"
      />
      <CustomIconButton
        value="return"
        selectedValue={selectedOption}
        onChange={() => handleOptionChange('return')}
        Icon={SyncIcon}
        label="Return"
      />
      <CustomIconButton
        value="multicity"
        selectedValue={selectedOption}
        onChange={() => handleOptionChange('multicity')}
        Icon={MultipleStopIcon}
        label="Multi-city"
      />
    </Box>
        
      </Grid>

      {/* Second Inner Grid (Container for items 1, 2, and 3) */}
      <Grid container spacing={1} style={{paddingBottom:'60px',width:'99%'}}>
        {/* item 1 */}
        <Grid item sm={12} xs={12} lg={6} md={6} direction='row'>
          <Box  style={paperStyle} >
             <Box onClick={(event) => handlePopoverClick(event, 'from')}  style={{ border:'1px solid #0067FF',borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px', width: '50%',height: '90px', cursor: 'pointer',marginRight:'-10px',borderRight:'none',}}>
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


    <Box onClick={(event) => handlePopoverClick(event, 'to')}  style={{border:'1px solid #0067FF',borderBottomRightRadius:'5px',borderTopRightRadius:'5px', width: '50%',height: '90px', cursor: 'pointer', marginLeft:'-10px',}}>
                
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
             <Box onClick={handleDPopoverClick} style={{ borderRight:'none', border:'1px solid #0067FF',borderBottomLeftRadius:'5px',borderTopLeftRadius:'5px', width: '50%', height: '90px',  float: 'left',cursor:'pointer', boxSizing:'border-box' }}>
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

  <Box onClick={(event) => handleRPopoverClick(event)} style={{ width: '50%', height: '90px',  float: 'left', boxSizing: 'border-box', border:'1px solid #0067FF',borderTopRightRadius:'5px' ,borderBottomRightRadius:'5px', borderLeft:'none', cursor:'pointer' }}>
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
  style={{ width: '100%', height:'90px',  cursor: 'pointer',border:'1px solid #0067FF',borderRadius:'5px',boxSizing: 'border-box',}}
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
        <Backdrop
      open={isFetching} // Control the visibility based on the state
      style={{ zIndex: 1, color: '#fff' }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
</>


  );
};

export default SearchForm;
