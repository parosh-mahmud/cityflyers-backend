import React from 'react';
import { Box, Typography } from '@mui/material';

const recommendedBoxStyle = {
  width: '100%',
  height: 'auto',
  backgroundColor: 'lightgray',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
};

const boxStyle = {
  width: '300px',
  height: '100%',
  backgroundColor: 'white',
  border:'1px solid gray',
  borderRadius: '5px'
};

const headingTextStyle = {
  fontWeight: 'bold',
}

const RecommendFilter = () => {
  return (
    <Box sx={recommendedBoxStyle}>
      <Box sx={boxStyle}>
        <Box sx={headingTextStyle}>Recommended</Box>
        <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
          <Typography>5H 30</Typography>
          <Typography>Direct</Typography>
          <Typography>BDT 61984</Typography>
        </Box>
      </Box>
      <Box sx={boxStyle}>
        <Box sx={headingTextStyle} >Cheapest</Box>
        <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
          <Typography>5H 30</Typography>
          <Typography>Direct</Typography>
          <Typography>BDT 61984</Typography>
        </Box>
      </Box>
      <Box sx={boxStyle}>
        <Box sx={headingTextStyle}>Fastest</Box>
        <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
          <Typography>5H 30</Typography>
          <Typography>Direct</Typography>
          <Typography>BDT 61984</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RecommendFilter;
