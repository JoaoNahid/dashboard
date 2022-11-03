import React from 'react';



export function SidebarIcon(props) {

  const handleSelected = (e) =>{
    if(props.toggle){
      let linksSidebar = document.getElementsByClassName('sidebarIcon')
      for (let i = 0; i < linksSidebar.length; i++) {
        const element = linksSidebar[i];
        element.classList.remove('sidebarIconActive')
        
      }
      e.currentTarget.classList.add('sidebarIconActive')
    }
  }

  return (
    <div
      className="sidebarIcon"
      onClick={(e) => handleSelected(e)}
    >
      <img src={`./img/${props.icon}`} alt="" />
      {
        props.title?
          <span>{props.title}</span>
        : null
      }
    </div>
  );
}