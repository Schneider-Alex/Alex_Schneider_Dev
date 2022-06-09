import React from 'react'
import Header from "./Header.js"
import AssignmentIcon from '@mui/icons-material/Assignment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import "./Projects.css"



function Projects() {
    return (
        <div className="projects">
            <Header Icon={AssignmentIcon} />
        </div>
    )
}

export default Projects