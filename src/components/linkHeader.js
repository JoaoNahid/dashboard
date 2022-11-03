import React from 'react';

function LinkHeader(props) {
  return ( 
    <a href={props.link} target="_blank">
      <div className="linkHeader">
        <img src={`./img/${props.icon}`} />
      </div>
    </a>
   );
}

export default LinkHeader;