import React from 'react';

function Welcome(props) {
  return ( 
    <div id='welcomeArea'>
      <div className="date">
        Feb. 2, November
      </div>
      <div>
        <div className="welcomeTo">Good Day Mr. {props.name}</div>
        <div className="userProfession"> {props.profession} </div>
      </div>
    </div>
   );
}

export default Welcome;