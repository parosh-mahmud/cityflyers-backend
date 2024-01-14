import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';

const AirportSelectionComponent = ({ airport, onClick, label }) => {
  return (
    <Box onClick={onClick} style={{ cursor: 'pointer', border: '1px solid #0067FF', borderRadius: '5px', width: '50%', height: '90px', backgroundColor: 'white', marginRight: '-10px', borderRight: 'none' }}>
      <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" style={{ marginLeft: '10px' }}>
        <Typography style={{ fontSize: '1em', display: 'flex' }}>
          {label === 'From' ? <FlightTakeoffIcon style={{ color: '#0067FF' }} /> : <FlightLandIcon style={{ color: '#0067FF' }} />}
          <Typography>{label}</Typography>
        </Typography>
        <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>{airport ? `${airport.city} - ${airport.code}` : 'Select an Airport'}</Typography>
        <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px' }}>
          {airport ? airport.name : 'Select an Airport'}
        </Typography>
      </Stack>
    </Box>
  );
};

export default AirportSelectionComponent;
