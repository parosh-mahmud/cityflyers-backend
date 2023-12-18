// TestComponent.js

import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  firstBox: {
    width: '60%', // Adjusted width for the first box
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
    justifyContent: 'flex-end',
    position: 'relative',
    margin: theme.spacing(0, 1), // Add margin between nested boxes
  },
  secondBox: {
    width: '40%', // Adjusted width for the second box
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

const TestComponent = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.container}>
      <Box className={classes.firstBox}>
        {/* Content for the first box */}
        First Box (60%)
        

        {/* Nested Boxes */}
        <Box className={classes.nestedBoxes}>
          {/* Nested Box 1 */}
          <Box className={classes.nestedBox}>
            <h2>Nested Box 1 Content</h2>
            <p>Some details about Nested Box 1...</p>
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
          className={classes.button}
          style={{ justifyContent: 'flex-end' }}
          endIcon={<ArrowDropDownIcon />}
        >
          View Details
        </Button>
      </Box>
      
      <Box className={classes.secondBox}>
        {/* Content for the second box */}
        Second Box (40%)
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
  );
};

export default TestComponent;
