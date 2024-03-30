import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 5,
    label: 'Single',
  },
  {
    value: 15,
    label: 'Bundle',
  },
  {
    value: 25,
    label: 'All',
  },
  {
    value: 50,
    label: '❤️',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderLabel() {
  return (
    <Box sx={{ width: 400 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={25}
        getAriaValueText={valuetext}
        step={5}
        marks={marks}
        min={5}
        max={50}
        valueLabelDisplay="on"
      />
    </Box>
  );
}