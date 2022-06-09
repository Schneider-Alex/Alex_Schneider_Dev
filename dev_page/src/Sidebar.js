import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.js"
import CottageIcon from '@mui/icons-material/Cottage';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function Sidebar() {
  return (
    <div className="sidebar">
            <div className="sidebar_top">
                <img src="/A_Logo.png"/>
            </div>
            <div className="sidebar_bottom">
                <SidebarOption title="Home" link="home" Icon={CottageIcon}/>
                <SidebarOption title="Projects" link="projects" Icon={AssignmentIcon}/>
                <SidebarOption title="Contact" link="contacts" Icon={AlternateEmailIcon}/>
            </div>
            
    </div>
  )
}

export default Sidebar