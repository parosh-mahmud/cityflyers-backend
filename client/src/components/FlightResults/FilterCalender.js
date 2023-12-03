import React from 'react';
import { Grid } from '@mui/material';

const FilterCalendar = () => {
  return (
    <Grid container spacing={1} style={{ display: 'flex' }} >
      {[...Array(7).keys()].map((index) => (
        <Grid item key={index} >
          <div
            style={{
              width: '150px',
              height: '72px',
              backgroundColor: 'lightblue', // Change the background color as needed
            }}
          >
            {/* Your content goes here */}
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default FilterCalendar;
