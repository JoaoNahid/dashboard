import React from 'react';
import BtnBoxes from './btnBoxes';
import PercentageBar from './percentageBar';

function PercentageBox(props) {
  return ( 
    <div id="chartBox">
      <div className="headerChartBox">
        <span> {props.title} </span>
        <BtnBoxes text="Details" />
      </div>

      <div className="contentChartBox">
        <div className="percentagesBar">
          <PercentageBar color="#0ff" complete="67%" text="Javascript" />
          <PercentageBar color="#1919e6" complete="78%" text="PHP" />
          <PercentageBar color="#ff0084" complete="32%" text="React Native" />
        </div>
      </div>

    </div>
   );
}

export default PercentageBox;