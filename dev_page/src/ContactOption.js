import React from 'react'
import "./ContactOption.css"

function ContactOption({ Icon, link, target }) {
    return (
        <div className="contactOption_wrapper">
            <div className="contactOption">
                {Icon && <a href={link} target={target}><Icon className="contactOption_icon" /></a>}
            </div>
        </div>
    )
}

export default ContactOption