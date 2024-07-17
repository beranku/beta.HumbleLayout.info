import * as React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
import MuiInput from '@mui/material/Input';
import Update from '@mui/icons-material/Update';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Translate from "@docusaurus/Translate";

// const muiTheme = createMuiTheme({
//   overrides:{
//     MuiSlider: {
//       thumb:{
//       color: "yellow",
//       },
//       track: {
//         color: 'red'
//       },
//       rail: {
//         color: 'black'
//       }
//     }
// }
// });

const marks = [
  {
    value: 0,
    label: '',
  },
  {
    value: 1,
    label: 'Updates',
  },
  {
    value: 4,
    label: <FavoriteIcon />,
  },
];

const Input = styled(MuiInput)`
  width: 2.8em;
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
    } else if (value > 99) {
      setValue(99);
    }
  };

  return (
    <div className="container">
      <h4 id="input-slider">
        Get Plan updates, News, User group:
      </h4>
      <div class="row">
        <div class="col col--2">
          <Update />
        </div>
        <div class="col col--8">
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
        </div>
        <div class="col col--2">
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 99,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          /> USD
        </div>
      </div>
      <div class="container" style={{"display": "flex", "justify-content": "center", "align-items": "center"}}>
        <button class="button button--primary" onClick={handleButtonClick}>
          <Translate>
            Checkout & Download
          </Translate>
          {/* <ShoppingBag /> */}
        </button>
      </div>
    </div>
  );
}