import React from 'react';
import BtnBoxes from './btnBoxes';

function ChartBox(props) {
  return ( 
    <div id="chartBox">
      <div className="headerChartBox">
        <span>{props.title}</span>
        <BtnBoxes text="Details" />
      </div>

      <div className="contentChartBox">
        <div className="chart">

        </div>
        <div className="chartDescription">
          <div className="itemChartDescription">
            <span>2</span>
            <p>Years of experience</p>
          </div>

          <div className="itemChartDescription">
            <span>1</span>
            <p>Year working</p>
          </div>

          <div className="itemChartDescription">
            <span>IT</span>
            <p>Technician</p>
          </div>
        </div>
      </div>

    </div>
   );
}

export default ChartBox;