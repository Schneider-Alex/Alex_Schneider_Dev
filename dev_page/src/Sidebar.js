import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.js"
import CottageIcon from '@mui/icons-material/Cottage';


function Sidebar() {
  return (
    <div className="sidebar">
            <div className="sidebar_top">
                <img src="/A_Logo.png"/>
            </div>
            <div className="sidebar_bottom">
                <h2>bottom</h2>
                <SidebarOption title="Home"/>
                <SidebarOption title="Resume"/>
                <SidebarOption title="Contact"/>
            </div>
            
    </div>
  )
}

export default Sidebar