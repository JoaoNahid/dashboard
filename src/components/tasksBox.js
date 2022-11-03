import React, { useState } from 'react';
import ModalAddTask from './modalAddTask';
import Task from './task';

function Tasks() {
  const [openModal, setOpenModal] = useState(false)

  const toggleDropdown = () => {    
    let arrow = document.getElementById('arrowProfile')
    let item = document.getElementById('tasksBox')
    item.classList.toggle('closedProfile')
    arrow.classList.toggle('arrowInherit')
  }

  const handleFilter = (e) => {
    e.currentTarget.classList.toggle('bgBlue')
  }

  return ( 
    <div id="tasksBox">
      <div className="headerTasks">
        <p>Tasks</p>
        <div className="toggleDropdown" onClick={() => toggleDropdown()}>
          <img id="arrowProfile" src="./img/next.png" alt="" />
        </div>
      </div>

      <div className="contentTasks">
        {
          openModal?
            <ModalAddTask setOpenModal={setOpenModal}/>
          :
            <>
              <div className="btnsTasks">
                <button 
                  className="btnTask bgBlue"
                  onClick={() => setOpenModal(true)}
                >
                  Add Task
                </button>
                <div>
                  <button 
                    id="pending"
                    className="btnTask bgBlue btnFilterTask"
                    onClick={(e) => handleFilter(e)}
                  >
                    Pending
                  </button>
                  <button 
                    id="complete"
                    className="btnTask btnFilterTask"
                    onClick={(e) => handleFilter(e)}
                  >
                    Completed
                  </button>
                </div>
              </div>
            </>
        }
        

        <div className="tasksArea">
          <Task title="Programming dasboard" pending={true} date="Nov. 02, 2020" />
          <Task title="Create repository" pending={false} date="Nov. 01, 2020" />
          <Task title="Find design" pending={false} date="Oct. 30, 2020" />
        </div>

      </div>
    </div>
   );
}

export default Tasks;