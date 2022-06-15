import React from 'react'
import Header from "./Header.js"
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./Projects.css"
import ProjectOption from './ProjectOption.js';



function Projects() {
    return (
        
        <div className="projects">
            <Header Icon={AssignmentIcon} />
            <div className="projects_options">
                <ProjectOption title="LinkedIn Clone" pic="/linkedinpic1.png" vid="/LinkedInClone.mov" description="A front-end focused recreation of the style of LinkedIn, using React and basic CSS on the front end. The application requires email verification driven by Firebase for account creation. Once an account is created users can add a post to a real time Firebase database which will then display the post in the center feed which is sorted by a timestamp." />
            </div>
        </div>
    )
}

export default Projects