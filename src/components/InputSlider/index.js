import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import House from '@mui/icons-material/House';

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

const Input = styled(MuiInput)`
  width: 42px;
`;

function valuetext(value) {
  return `${value}°C`;
}

export default function InputSlider() {
  const [value, setValue] = React.useState(25);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? 5 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 5) {
      setValue(5);
    } else if (value > 50) {
      setValue(50);
    }
  };

  return (
    <Box sx={{ width: 400 }}>
      <Typography id="input-slider" gutterBottom>
        Download of Floor plan, 3D model, views for:
      </Typography>
      <Grid container spacing={6} alignItems="center">
        <Grid item>
          <House />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            aria-label="Always visible"
            defaultValue={25}
            getAriaValueText={valuetext}
            step={5}
            marks={marks}
            min={5}
            max={50}
            valueLabelDisplay="off"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 5,
              min: 5,
              max: 50,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}