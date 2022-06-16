import React from 'react'
import Header from "./Header.js"
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./Projects.css"
import ProjectOption from './ProjectOption.js';



function Projects() {
    return (
        
        <div className="projects">
            <Header header="My Projects" />
            <div className="projects_options">
                <ProjectOption title="LinkedIn Clone" pic="/linkedinpic1.png" vid="/LinkedInClone.mov" description="A front-end focused recreation of the style of LinkedIn, using React and basic CSS on the front end. The application requires email verification driven by Firebase for account creation. Once an account is created users can add a post to a real time Firebase database which will then display the post in the center feed which is sorted by a timestamp." />
                <ProjectOption title="OnTrack" vid="/OnTrackVideo.mov" description="Built as a group project, OnTrack is a social media application designed for highschool track coaches and their teams of athletes, built using Flask (Python Back End, MySQL Database) and basic HTML, CSS, and JS on the front end. The app allows for two types of accounts, coach and athlete respectively. Coaches have the ability to create their athletes accounts, post messages to their team, and record track event times which they can later use our hard coded search algorithim to sort through. Athletes can see their team mates times as well as their coaches post and comment/like each of them respectively. My role on this project was full stack from database design to front end functionality."/>
                <a href="#top">Top</a>
            </div>
        </div>
    )
}

export default Projects