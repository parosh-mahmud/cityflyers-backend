import React from 'react';
import { Box, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const DateSelectionComponent = ({ label, date, dayOfWeek, onClick }) => {
  return (
    <Box onClick={onClick} style={{ borderRight: 'none', border: '1px solid #0067FF', borderRadius: '5px', width: '50%', height: '90px', backgroundColor: 'white', float: 'left', cursor: 'pointer', boxSizing: 'border-box' }}>
      <Box style={{ display: 'flex' }}>
        <CalendarMonthIcon style={{ color: '#0067FF' }} />
        <Typography>{label}</Typography>
      </Box>
      <Typography style={{ fontSize: '22px', fontWeight: 'bold' }}>{date.format('DD MMM YY')}</Typography>
      <Typography>{dayOfWeek}</Typography>
    </Box>
  );
};

export default DateSelectionComponent;
