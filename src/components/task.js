import React from 'react';

function Task(props) {
  return ( 
    <div className="task">
      <div>
        <div className="date">
          {props.date}
        </div>
        <div className="status"
          style={
            props.pending? {backgroundColor: 'var(--opacityWhite)'} : {backgroundColor: 'green'}
          }
        ></div>
        <span>{props.title}</span>
      </div>
      {
        !props.pending?
        <button className="btnBoxes btnCompleteTask">
          <img src="./img/tick.png" alt="" />
        </button>
        : null
      }
    </div>
   );
}

export default Task;