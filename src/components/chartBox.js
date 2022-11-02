import React from 'react';
import BtnBoxes from './btnBoxes';

function ChartBox(props) {
  return ( 
    <div id="chartBox">
      <div className="headerChartBox">
        <span>Desenvolvimento Web</span>
        <BtnBoxes text="Detalhes" />
      </div>

      <div className="contentChartBox">
        <div className="chart">

        </div>
        <div className="chartDescription">
          <div className="itemChartDescription">
            <span>2</span>
            <p>Anos de experiência</p>
          </div>

          <div className="itemChartDescription">
            <span>1</span>
            <p>Ano trabalhando</p>
          </div>

          <div className="itemChartDescription">
            <span>3</span>
            <p>Anos de curso</p>
          </div>
        </div>
      </div>

    </div>
   );
}

export default ChartBox;