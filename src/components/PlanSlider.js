import * as React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import House from '@mui/icons-material/House';
import FavoriteIcon from '@mui/icons-material/Favorite';

const marks = [
  {
    value: 11,
    label: 'Single',
  },
  {
    value: 22,
    label: 'Bundle',
  },
  {
    value: 33,
    label: 'All',
  },
  {
    value: 55,
    label: <FavoriteIcon />,
  },
];

const Input = styled(MuiInput)`
  width: 2.8em;
`;

function valuetext(value) {
  return `${value}°C`;
}

export default function PlanSlider() {
  const [value, setValue] = React.useState(33);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? 5 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 11) {
      setValue(11);
    } else if (value > 999) {
      setValue(999);
    }
  };

return (
  <div className="container">
    <h4 id="input-slider">
      Get Floor plan, 3D model, views for:
    </h4>
    <div class="row">
      <div class="col col--2">
        <House />
      </div>
      <div class="col col--8">
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            aria-label="Always visible"
            defaultValue={33}
            getAriaValueText={valuetext}
            step={11}
            marks={marks}
            min={11}
            max={55}
            valueLabelDisplay="off"
          />
      </div>
      <div class="col col--2">
        <Input
          value={value}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 11,
            min: 11,
            max: 999,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        /> USD
      </div>
    </div>
  </div>
);
}