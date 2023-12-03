import React from 'react';
import { Grid, Paper, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    height: '100vh', // Set the height of the outer container to 100% of the viewport height
  },
  firstGridItem: {
    height: '100%',
    width: '217px',
  },
  secondGridItem: {
    height: '284px',
    width: '90%',
  },
  thirdGridItem: {
    height: '298px',
    width: '10%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const TestComponent = () => {
  const classes = useStyles();
return (
    <Grid container spacing={2}>
      {/* First Grid */}
      <Grid item xs={12}>
        <Paper style={{ height: 217, padding: 16 }}>
          {/* Content for the first Paper */}
          First Grid - Paper height: 217px
        </Paper>
      </Grid>

      {/* Second Grid */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {/* First Grid within the Second Grid */}
          <Grid item xs={9}>
            <Paper style={{ height: '100%', padding: 16 }}>
              {/* Content for the first Paper within the Second Grid */}
              First Grid in Second Grid - 90%
            </Paper>
          </Grid>

          {/* Second Grid within the Second Grid */}
          <Grid item xs={3}>
            <Paper style={{ height: '100%', padding: 16 }}>
              {/* Content for the second Paper within the Second Grid */}
              Second Grid in Second Grid - 10%
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestComponent;
