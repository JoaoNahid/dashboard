import React from 'react';
import SkillBox from './components/skillsBox';
import Welcome from './components/welcome'

export default function Dashboard() {
  return (
    <div className="">
      {/* <BlueSidebar /> */}
      <div className="row w-100">      
        <div className="col-md-8">
          <div id="dashboardContent">
            <div className="searchArea">
              <input type="text" placeholder="Pesquisar ..."/>
              <div>
                <img src="./img/magnifying-glass.png" alt="" />
              </div>
            </div>

            <Welcome name="João Nahid" profession="Web developer at Webtagger" />

            <div className="threeBoxes">
              <SkillBox skill="Javascript" />
              <SkillBox skill="PHP" />
              <SkillBox skill="React" />
            </div>

          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
