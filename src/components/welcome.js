import React from 'react';

function Welcome(props) {
  return ( 
    <div id='welcomeArea'>
      <img src="./img/pngWelcome.png" alt="" />
      <div className="date">
        <img src="./img/calendar.png" alt="" />
        <span>Feb. 2, November</span>
      </div>
      <div>
        <div className="welcomeTo">Good Day Mr. {props.name}</div>
        <div className="userProfession"> {props.profession} </div>
      </div>
    </div>
   );
}

export default Welcome;