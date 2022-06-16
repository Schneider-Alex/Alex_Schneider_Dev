import React from 'react'
import "./Header.css"
import TopButton from './TopButton.js'



function Header({header}) {
    return (
        <div className="header">
            <a href="/">
            <div className="header_left">
                <img src="/A_Logo.png"/>
            </div>
            </a>
            <h1>{header}</h1>
        </div>
    )
}

export default Header