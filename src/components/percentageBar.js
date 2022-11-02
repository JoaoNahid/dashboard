import React from 'react';

function PercentageBar(props) {
  const style = {
    backgroundColor: props.color,
    width: props.complete,
    boxShadow: `0px 0px 6px 0px ${props.color}`
  }

  return ( 
    <div>
      <p className="titlePercentage"> {props.text} </p>
      <div className="fullPercentage">
        <span>{props.complete}</span>
        <div className="percentage" style={style}></div>
      </div>
    </div>
   );
}

export default PercentageBar;