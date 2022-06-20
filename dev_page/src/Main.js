import React from 'react'
import "./Main.css"
import Header from "./Header.js"
import Sidebar from "./Sidebar.js";
import SidebarOption from "./SidebarOption.js";
import CottageIcon from '@mui/icons-material/Cottage';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


function Main() {
  return (
    <div className="main">
        <Header header="Home"/>
        <div className="main_body">
          <div className="main_sidebar">
            <Sidebar/>
          </div>
          <div className="main_content">
            <div className="main_content_top">
            <h1>Alex Schneider</h1>
            <h3>-Chemical Engineer Turned Web Developer-</h3>
            </div>
            <div className="main_content_bottom">
            <h3>Welcome to  my site! 
              Please feel free to explore:</h3>
              <div className="main_content_bottom_links">
                <SidebarOption title="Projects" link="projects" Icon={AssignmentIcon}/>
                <SidebarOption title="Contact" link="contacts" Icon={AlternateEmailIcon}/>
                </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Main