import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';

const TravelerClassSelectionComponent = ({
  setAdults,
  setChildren,
  setInfants,
  adults,
  children,
  infants,
  selectedClass,
  openModal,
}) => {
  return (
    <Box style={{ padding: '10px', width: '100%', height: '90px', backgroundColor: 'white', cursor: 'pointer', border: '1px solid #0067FF', borderRadius: '5px', boxSizing: 'border-box' }}>
      <Typography>Traveller & Class</Typography>
      <Typography style={{ fontSize: '22px', fontWeight: 'bold' }}>{`${adults + children + infants} Person${adults + children + infants > 1 ? 's' : ''}`}</Typography>
      <Typography style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{selectedClass}</Typography>

      <Divider style={{ margin: '8px 0' }} />

      <Button onClick={() => setAdults(adults - 1)}>-</Button>
      {adults}
      <Button onClick={() => setAdults(adults + 1)}>+</Button>

      <Divider style={{ margin: '8px 0' }} />

      <Button onClick={() => setChildren(children - 1)}>-</Button>
      {children}
      <Button onClick={() => setChildren(children + 1)}>+</Button>

      <Divider style={{ margin: '8px 0' }} />

      <Button onClick={() => setInfants(infants - 1)}>-</Button>
      {infants}
      <Button onClick={() => setInfants(infants + 1)}>+</Button>

      <Divider style={{ margin: '8px 0' }} />

      <Button variant="contained" color="primary" onClick={openModal}>
        Open Modal
      </Button>
    </Box>
  );
};

export default TravelerClassSelectionComponent;
