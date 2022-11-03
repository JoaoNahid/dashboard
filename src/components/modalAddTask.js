import React from 'react';

function ModalAddTask(props) {

  const handleAddTask = (e) => {
    console.log('Added');
  }

  return ( 
    <div className="modalAddTask">
      <input type="text" placeholder='Task' />
      <div>
            <button 
              id="pending"
              className="btnTask bgBlue btnFilterTask"
              onClick={(e) => handleAddTask(e)}
            >
              Add
            </button>
            <button 
              id="complete"
              className="btnTask btnFilterTask"
              onClick={() => props.setOpenModal(false)}
            >
              Cancel
            </button>
          </div>
    </div>
   );
}

export default ModalAddTask;