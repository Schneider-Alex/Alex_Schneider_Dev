import React from 'react'
import Header from "./Header.js"
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./Projects.css"
import ProjectOption from './ProjectOption.js';



function Projects() {
    return (
        <div className="projects">
            <Header Icon={AssignmentIcon} />
            <ProjectOption title="LinkedIn Clone" pic="/linkedinpic1.png" vid="/LinkedInClone.mov" />
        </div>
    )
}

export default Projects