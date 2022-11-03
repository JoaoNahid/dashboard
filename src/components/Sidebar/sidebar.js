import React from 'react';
import { SidebarIcon } from './sidebarIcon';

export function Sidebar() {
  return (
    <div id="sidebar">
      <div>
      <SidebarIcon icon="menu.png" />
      </div>

      <div className="navLinks">
        <SidebarIcon icon="dashboard.png" toggle={true} />
        <SidebarIcon icon="domain.png" toggle={true} />
        <SidebarIcon icon="database.png" toggle={true} />
        <SidebarIcon icon="profile.png" toggle={true} /> 
      </div>

      <div>
        <SidebarIcon icon="logout.png" />
      </div>

    </div>
  );
}