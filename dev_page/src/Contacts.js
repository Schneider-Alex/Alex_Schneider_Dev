import React from 'react'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Header from "./Header.js"
import "./Contacts.css"
import ContactOption from "./ContactOption.js"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Sidebar from './Sidebar.js';
import FilePresentRoundedIcon from '@mui/icons-material/FilePresentRounded';

function Contacts() {
    return (
        <div className="contacts">
            <Header className="contacts_header" header="Contact Me" />
            <div className="contacts_body">
                <div className="contacts_sidebar">
                    <Sidebar/>
                </div>
                <div className="contacts_content">
                    <ContactOption Icon={LinkedInIcon} link="https://www.linkedin.com/in/alex-schneider-stay-learning/" target="_blank" name="LinkedIn" download=""/>
                    <ContactOption Icon={GitHubIcon} link="https://github.com/Schneider-Alex" target="_blank" name="GitHub" download="" />
                    <ContactOption Icon={FilePresentRoundedIcon} link="Alexander Schneider - Resume 1.1.pdf" target="" name="Download Resume" download="Alex Schneider Resume"/>
                </div>
            </div>
        </div>
    )
}

export default Contacts