import React from 'react';
import { Box, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const TestComponent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* First Box */}
      <Box
        style={{
          backgroundColor: '#2196F3', // Material-UI primary color
          width: '50%',
          padding: '20px',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box
          style={{
            backgroundColor: '#FFC107', // Material-UI yellow color
            flex: '1',
            margin: '5px',
            padding: '10px',
          }}
        >
          Box 1.1
        </Box>
        <Box
          style={{
            backgroundColor: '#FF5722', // Material-UI deep orange color
            flex: '1',
            margin: '5px',
            padding: '10px',
          }}
        >
          Box 1.2
        </Box>
      </Box>

      {/* Second Box */}
      <Box
        style={{
          backgroundColor: '#4CAF50', // Material-UI green color
          width: '50%',
          padding: '20px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <Box
          style={{
            backgroundColor: '#E91E63', // Material-UI pink color
            flex: '1',
            margin: '5px',
            padding: '10px',
          }}
        >
          Box 2.1
        </Box>
        <Box
          style={{
            backgroundColor: '#9C27B0', // Material-UI purple color
            flex: '1',
            margin: '5px',
            padding: '10px',
          }}
        >
          Box 2.2
        </Box>
        <Box
          style={{
            backgroundColor: '#673AB7', // Material-UI deep purple color
            flex: '1',
            margin: '5px',
            padding: '10px',
          }}
        >
          Box 2.3
        </Box>
        <Box
          style={{
            backgroundColor: '#3F51B5', // Material-UI indigo color
            flex: '1',
            margin: '5px',
            padding: '10px',
          }}
        >
          Box 2.4
        </Box>
      </Box>

      {/* View Details Button */}
      <Button
        style={{
          width: '50%',
          margin: '10px auto',
          backgroundColor: '#2196F3',
          color: 'white',
        }}
        endIcon={<ArrowDropDownIcon />}
      >
        View Details
      </Button>
    </div>
  );
};

export default TestComponent;
