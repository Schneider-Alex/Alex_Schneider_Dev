import React from 'react'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Header from "./Header.js"
import "./Contacts.css"
import ContactOption from "./ContactOption.js"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Contacts() {
  return (
    <div className="contacts">
        <Header className="contacts_header" Icon={AlternateEmailIcon}/>
        <div className="contacts_body">
            <ContactOption Icon={LinkedInIcon} link="https://www.linkedin.com/in/alex-schneider-stay-learning/" target="_blank"/>
            <ContactOption Icon={GitHubIcon} link="https://github.com/Schneider-Alex" target="_blank"/>
            <ContactOption Icon={EmailIcon} link="/message" target=""/>
        </div>
    </div>
  )
}

export default Contacts