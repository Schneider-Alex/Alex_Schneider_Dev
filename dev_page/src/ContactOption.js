import React from 'react'
import "./ContactOption.css"

function ContactOption({ Icon, link, target,name,download }) {
    return (
        <div className="contactOption_tert">
            <div className="contactOption_wrapper">
                <div className="contactOption">
                    {Icon && <a href={link} target={target} download={download}><Icon className="contactOption_icon" /></a>}
                </div>
            </div>
            <p>{name}</p>
        </div>
    )
}

export default ContactOption