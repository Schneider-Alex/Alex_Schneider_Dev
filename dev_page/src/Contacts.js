import React from 'react'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Header from "./Header.js"
import "./Contacts.css"


function Contacts() {
  return (
    <div className="contacts">
        <Header className="contacts_header" Icon={AlternateEmailIcon}/>
        <div className="contacts_body">
            
        </div>
    </div>
  )
}

export default Contacts