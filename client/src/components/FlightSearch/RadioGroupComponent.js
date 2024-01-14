import React from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

const RadioGroupComponent = ({ selectedOption, handleOptionChange }) => {
  return (
    <RadioGroup
      row
      aria-label="journey-type"
      name="journey-type"
      value={selectedOption}
      onChange={(e) => handleOptionChange(e.target.value)}
    >
      <FormControlLabel value="oneway" control={<Radio color="warning" />} label="One-way" />
      <FormControlLabel value="return" control={<Radio />} label="Return" />
      <FormControlLabel value="multicity" control={<Radio />} label="Multi-city" />
    </RadioGroup>
  );
};

export default RadioGroupComponent;
