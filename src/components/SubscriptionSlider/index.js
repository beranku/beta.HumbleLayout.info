import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import Update from '@mui/icons-material/Update';
import Button from '@mui/material/Button';
import ShoppingBag from '@mui/icons-material/ShoppingBag';

const marks = [
  {
    value: 0,
    label: 'No updates',
  },
  {
    value: 1,
    label: 'Plan updates',
  },
  {
    value: 5,
    label: '❤️',
  },
];

const Input = styled(MuiInput)`
  width: 42px;
`;

function valuetext(value) {
  return `${value}°C`;
}

export default function SubscriptionSlider() {
  const [value, setValue] = React.useState(1);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const targetUrl = 'http://api.humblelayout.info/webhook/checkout';

  const handleButtonClick = () => {
    window.location.href = `http://api.humblelayout.info/webhook/checkout?amount=${value}`;
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? 1 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 5) {
      setValue(5);
    }
  };

  return (
    <Box sx={{ width: 400 }}>
      <Typography id="input-slider" gutterBottom>
        Access to Plan updates, News, User group:
      </Typography>
      <Grid container spacing={6} alignItems="center">
        <Grid item>
          <Update />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            aria-label="Always visible"
            defaultValue={1}
            getAriaValueText={valuetext}
            step={1}
            marks={marks}
            min={0}
            max={5}
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
              step: 1,
              min: 0,
              max: 10,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
      <Button onClick={handleButtonClick} variant="contained" endIcon={<ShoppingBag />}>
        Checkout & Download
      </Button>
    </Box>
  );
}