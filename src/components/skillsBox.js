import React from 'react';

function SkillBox(props) {
  return ( 
    <div id="skillBox">
      <div className="headerSkillBox">
        <span>{props.skill}</span>
      </div> 
    </div>
   );
}

export default SkillBox;
