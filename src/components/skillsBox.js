import React from 'react';

function SkillBox(props) {
  return ( 
    <div id="skillBox">
      <div className="headerSkillBox">
        <span>{props.skill}</span>
        <img src="./img/dotsMenu.png" alt="" />
      </div> 
    </div>
   );
}

export default SkillBox;
