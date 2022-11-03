import React from 'react';
import ChartBox from './components/chartBox';
import SkillBox from './components/skillsBox';
import PercentageBox from './components/percentageArea';
import Welcome from './components/welcome'
import Profile from './components/profile';
import Tasks from './components/tasksBox';
import SearcBar from './components/searchBar';
import LinkHeader from './components/linkHeader';
import { Sidebar } from './components/Sidebar/sidebar';

export default function Dashboard() {
  return (
    <div className="appContent">
      <Sidebar />
      <div className="row w-100">      
        <div className="col-md-8">
          <div id="dashboardContent">
            <div className="header">
              <div className="row">
                <div className="col-md-8">
                  <SearcBar placeholder="Search..." />
                </div>
                <div className="col-md-4">
                  <div className="linksAreaHeader">
                    <LinkHeader link="" icon="facebook.png" />
                    <LinkHeader link="https://github.com/JoaoNahid" icon="github.png" />
                  </div>
                </div>
              </div>
              
              
            </div>

            <Welcome name="João Nahid" profession="Web developer at Webtagger" />

            <div className="threeBoxes">
              <SkillBox skill="Javascript" />
              <SkillBox skill="PHP" />
              <SkillBox skill="React" />
            </div>

            <div className="twoBoxes">
              <ChartBox title="Web Development" />
              <PercentageBox title="Web Development" />
            </div>

          </div>
        </div>
        <div className="col-md-4">
          <div id="rightSidebar">
            <Profile />
            <Tasks />
          </div>
        </div>
      </div>
    </div>
  );
}
