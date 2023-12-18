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
    width: '90%',
    backgroundColor: 'lightblue',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    
    justifyContent: 'flex-end',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  secondBox: {
    width: '10%',
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
        First Box (90%)
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
        Second Box (10%)
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
