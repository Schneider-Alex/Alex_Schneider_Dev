import React from 'react'
import "./Main.css"
import Header from "./Header.js"
import CottageIcon from '@mui/icons-material/Cottage';
import Sidebar from "./Sidebar.js"


function Main() {
  return (
    <div className="main">
        <Header header="Home"/>
        <div className="main_body">
          <div className="main_sidebar">
            <Sidebar/>
          </div>
          <div className="main_content">
          </div>
        </div>
        
    </div>
  )
}

export default Main