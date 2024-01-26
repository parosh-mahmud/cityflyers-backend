import React, { useEffect, useRef, useState } from 'react';
import { Container, Button, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAirPreBookSearchData } from '../../redux/slices/airPreBookSlice';

import BookingOptions from './BookingOptions';
import LayoutPage from '../../pages/LayoutPage';
import CityLogo from '..//..//assets/logos/CityLogo.png'
import axios from 'axios';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import { selectPassengerDetails } from '../../redux/slices/passengerDetailsSlice';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FlightCard from '../FlightResults/FlightCard';
import jsPDF from 'jspdf';
import { selectAirPriceData } from '../../redux/slices/airPriceSlice';


const AirBookForm = () => {
  const airBookedSearchData = useSelector(selectAirPreBookSearchData);
  const passengerDetailsData = useSelector(selectPassengerDetails);
  const airRulesData = useSelector(selectAirPriceData)
  const airRules = airRulesData.airRules;
  const segment = airBookedSearchData?.Results[0]?.segments[0];
  const discount = airBookedSearchData?.Results[0]?.Discount;
  const fares = airBookedSearchData?.Results[0]?.Fares[0];
  console.log(fares)
  const passenger = passengerDetailsData.Passengers[0];
  console.log(passenger)
  
const calculateSubtotal = () => {
    if (fares && discount !== undefined) {
      return fares.BaseFare + fares.Tax + fares.OtherCharges + fares.ServiceFee - discount;
    }
    return 0; // Default value if fares or discount is not available
  };

  console.log(airBookedSearchData.Results);
  const [airlineLogoUrl, setAirlineLogoUrl] = useState(null);
  const handlePrint = () => {
    window.print();
  };

const printableContentRef = useRef(null);

  useEffect(() => {
  const contentRef = printableContentRef.current;
  if (contentRef) {
    // Log the content itself to verify it's not empty
    console.log(contentRef);
  }
}, []);

  useEffect(() => {
    // Fetch the logo URL based on AirlineCode
    const fetchLogoUrl = async () => {
      try {
        const response = await axios.get(`/api/airline/${airBookedSearchData.Results[0].segments[0].Airline.AirlineCode}`);
        setAirlineLogoUrl(response.data.logoUrl); // Adjust based on your actual response structure
      } catch (error) {
        console.error('Error fetching airline logo:', error);
      }
    };

    // Check if AirlineCode is available and fetch the logo
    if (airBookedSearchData.Results[0].segments[0].Airline && airBookedSearchData.Results[0].segments[0].Airline.AirlineCode) {
      fetchLogoUrl();
    }
  }, [airBookedSearchData.Results[0].segments[0].Airline]);

  const handleDownloadPDF = () => {
  const content = printableContentRef.current;
  if (!content) {
    console.error('Printable content not found.');
    return;
  }

  const pdf = new jsPDF();
  pdf.html(content, {
    callback: () => {
      pdf.save('airBookForm.pdf');
    },
  });
};

  const box1Styles = {
      backgroundColor:'red',

  }

  return (
        <LayoutPage >
      <div style={{ display: 'flex', height: '100%',backgroundColor:'lightgray',padding:'15px' }}>
      <div ref={printableContentRef} id="printableContent" style={{ flex: '1 0 30%', display: 'flex', flexDirection: 'column' ,}}>
        <div style={{ flex: '1', backgroundColor: 'lightgray',display:'flex',border:'1px solid white',borderRadius:'2px',marginBottom:'20px' }}>
          {/* Content for the first column */}
          <Box sx={{width:'50%',justifyContent:'left',display:'flex',flexDirection:'column',alignItems:'start'}}>
            <Typography>Booking ID: {airBookedSearchData.BookingID}</Typography>
            <Typography>Booked By: {passenger.FirstName} {passenger.LastName} </Typography>
            <Typography>Reserved Unit</Typography>
            <Typography>Booking status</Typography>
          </Box>
          <Box>
        <Typography variant='body2' sx={{fontStyle:''}}>Ticket price is determined on the date of sale and is not guaranteed until ticketing. Time limit may be changed. The actual time limit should be requested in the call centre. Kindly issue or cancel the PNR before the booking is automatically expired or cancelled by the Airlines to avoid Airlines penalty or ADM.</Typography>

          </Box>
        </div>
        <div style={{ flex: '1 0 70%' ,backgroundColor:'lightgray'}}>
          {/* Additional content for the first column */}
          <Box sx={{display:'flex',flexDirection:'column'}}>
            {/* logo box */}
            <Box sx={{display:"flex",flexDirection:'column',justifyContent:'flex-start',alignItems:'baseline'}}>
              <img src={CityLogo}  alt="Logo" />
              <Typography variant='body2'>thecityflyers.com</Typography>
            </Box>
            {/* traveller note */}
            <Box sx={{display:'flex',}}>
              <Box sx={{backgroundColor:'#2F2F2F',flex:'1 0 40%', height:'40%'}} >
                <Box sx={{color:'white',alignItems:'baseline',display:'flex'}}>
                  <Typography sx={{padding:'3px'}}>Travel Note:</Typography>
                </Box>
                <Box sx={{height:'auto',width:'auto',backgroundColor:'white',marginTop:'5px',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',border:'3px solid #2F2F2F'}}>
                  <Typography variant='body2' align='left' >Check In counter will open before <strong>1.30 hours of domestic</strong>  and <strong>3 hours of international</strong> flight departure.</Typography>
              <Typography variant='body2' align='left'>Passenger reporting late for check-in may be refused to board on flight. 
Please bring a valid <strong>Photo ID.</strong></Typography>
                  <Typography variant='body2' align='left'>
                  
                  Check-in counter will be closed before <strong>1.30 hours of domestic </strong>and 
of domestic and <strong>3 hours of international</strong> flight departure.</Typography>
                </Box>
              </Box>

              
              <Box sx={{backgroundColor:'lightgray',flex:'1 0 20%',height:'20%',marginTop:'-47px'}}>
                <img
                            src={airlineLogoUrl}
                            alt="Airline Logo"
                            width="150"
                            height="120"
                            
                          />

                   <Typography>sdlfdsklfj</Typography>       
                   <Typography>sdlfdsklfj</Typography>       
                   <Typography>sdlfdsklfj</Typography>       
                </Box>


              <Box sx={{backgroundColor:'green',flex:'1 0 40%',height:'40%'}}>
                
                ffff
              
              </Box>


            </Box>


            <Box sx={{backgroundColor:'#ED6C02',color:'white',height:'30px',width:'auto',padding:'5px',display:'flex'}}>
              <WarningOutlinedIcon/>
            <Typography align='left'>Your booking TCF2401141095035 will expire in 18.23.03 hours. Kindly pay the ticket before the given ticketing time limit.</Typography>
            </Box>

             <Box sx={{backgroundColor:'#2F2F2F',flex:'1 0 40%', height:'40%'}} >
                <Box sx={{color:'white',alignItems:'baseline',display:'flex'}}>
                  <Typography sx={{padding:'3px'}}>Passenger</Typography>
                </Box>
                <Box sx={{height:'auto',width:'auto',backgroundColor:'white',marginTop:'5px',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',border:'3px solid #2F2F2F'}}>
                  
                  <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                    <Typography  align='center'> <PermIdentityOutlinedIcon sx={{color:"#0067FF"}}/> {passenger.Title} {passenger.FirstName} {passenger.LastName}</Typography>
                    <Typography> <CallOutlinedIcon/> {passenger.ContactNumber}</Typography>
                  </Box>

                  <Box sx={{display:'flex', justifyContent:'center'}}>
                    <BadgeOutlinedIcon sx={{color:'#0067FF'}}/>
                    <Typography>Something</Typography>
                  </Box>

                </Box>
              </Box>

            <Box sx={{backgroundColor:'#2F2F2F',flex:'1 0 40%', height:'40%'}} >
                <Box sx={{color:'white',alignItems:'baseline',display:'flex'}}>
                  <Typography sx={{padding:'3px'}}>Flight itinerary</Typography>
                </Box>
                <Box sx={{height:'auto',width:'auto',backgroundColor:'white',marginTop:'5px',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',border:'3px solid #2F2F2F'}}>
                  
                  <FlightCard flightData={{ segments: [segment] }} showActions={false} />

                </Box>
              </Box>
              {/* passenger details */}
              <Box sx={{backgroundColor:'#2F2F2F',flex:'1 0 40%', height:'40%',justifyContent:'center',alignContent:'center'}} >
                <Box sx={{color:'white',alignItems:'baseline',display:'flex'}}>
                  <Typography sx={{padding:'3px'}}>Passenger Details</Typography>
                </Box>
                <Box sx={{height:'auto',width:'auto',backgroundColor:'white',marginTop:'5px',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',border:'3px solid #2F2F2F',display:'flex',justifyContent:'space-between'}}>
                  
                  <Box sx={{}}>
                  
                  <Typography align='left'> Name <br/>{passenger.Title} {passenger.FirstName} {passenger.LastName}</Typography>
                  </Box>

                  <Box sx={{display:'flex',justifyContent:'space-around',width:'70%'}}>
                    <Typography align='left'>Gender<br/>{passenger.FirstName}</Typography>
                    <Typography align='left'>Gender<br/>{passenger.Gender}</Typography>
                    <Typography align='left'>Passenger type<br/>{passenger.PaxType}</Typography>
                    <Typography align='left'>Date of Birth<br/>{passenger.DateOfBirth}</Typography>
                    <Typography align='left'>Passport Number<br/>{passenger.FirstName}</Typography>
                    <Typography align='left'>Docs Expiration<br/>{passenger.FirstName}</Typography>
                  </Box>

                </Box>
              </Box>
                {/* date change fee & cancellation fee */}
              <Box sx={{backgroundColor:'#2F2F2F',flex:'1 0 40%', height:'40%',justifyContent:'center',alignContent:'center', display:'flex'}} >
              <Box sx={{width:'50%'}}>
                  <Box sx={{color:'white',alignItems:'baseline',display:'flex',justifyContent:'space-between'}}>
                  <Typography sx={{padding:'3px'}}>Date change fees</Typography>
                  
                </Box>
               <Box sx={{height:'auto',width:'auto',backgroundColor:'white',marginTop:'5px',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',border:'3px solid #2F2F2F',display:'flex',flexDirection:'column'}}>
                  
                  <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography>More than 24 hours before departure</Typography>
                    <Typography>dfd</Typography>
                    
                    </Box>
                  <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography>More than 24 hours before departure</Typography>
                    <Typography>dfd</Typography>
                    
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography>More than 24 hours before departure</Typography>
                    <Typography>dfd</Typography>
                    
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography>More than 24 hours before departure</Typography>
                    <Typography>dfd</Typography>
                    
                    </Box>

                </Box>
                </Box>

                <Box sx={{width:'50%'}}>
                  <Box sx={{color:'white',alignItems:'baseline',display:'flex',justifyContent:'space-between'}}>
                  <Typography sx={{padding:'3px'}}>Cancellation fees</Typography>
                  
                </Box>
                <Box sx={{height:'auto',width:'auto',backgroundColor:'white',marginTop:'5px',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',border:'3px solid #2F2F2F',display:'flex',flexDirection:'column'}}>
                  
                  <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography>More than 24 hours before departure</Typography>
                    <Typography>dfd</Typography>
                    
                    </Box>
                  <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography>More than 24 hours before departure</Typography>
                    <Typography>dfd</Typography>
                    
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography>More than 24 hours before departure</Typography>
                    <Typography>dfd</Typography>
                    
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography>More than 24 hours before departure</Typography>
                    <Typography>dfd</Typography>
                    
                    </Box>

                </Box>
                </Box>
                
              </Box>
              {/* date change fee and cancellation fee end */}

              
                 <Box sx={{backgroundColor:'#2F2F2F',flex:'1 0 40%', height:'40%',justifyContent:'center',alignContent:'center'}} >
                <Box sx={{color:'white',alignItems:'baseline',display:'flex'}}>
                  <Typography sx={{padding:'3px'}}>Fare Details</Typography>
                </Box>
                <Box sx={{height:'auto',width:'auto',backgroundColor:'white',marginTop:'5px',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',border:'3px solid #2F2F2F',display:'flex'}}>

                  <Box sx={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                    <Typography align='left'>Passenger Type<br/>{passenger.PaxType}</Typography>
                    <Typography align='left'>Base fare<br/>{fares.BaseFare}</Typography>
                    <Typography align='left'>Taxes<br/>{fares.Tax}</Typography>
                    <Typography align='left'>AIT & VAT<br/>N/A</Typography>
                    <Typography align='left'>Discount<br/>{discount}</Typography>
                    <Typography align='left'>Other Charges<br/>{fares.OtherCharges}</Typography>
                    <Typography align='left'>Service fee<br/>{fares.ServiceFee}</Typography>
                    <Typography align='left'>Count<br/>{fares.PassengerCount}</Typography>
                    <Typography align='left'>Sub Total<br/>{calculateSubtotal()}</Typography>
                  </Box>

                </Box>
              </Box>
                
            
          </Box>
        </div>
      </div>
      <div style={{ flex: '0 0 20%', backgroundColor: 'lightgray', }}>
        {/* Content for the second column */}
        <BookingOptions handleDownloadPDF={handleDownloadPDF} />
      </div>
    </div>
    </LayoutPage>
  );
};

export default AirBookForm;
