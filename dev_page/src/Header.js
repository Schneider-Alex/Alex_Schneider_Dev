import React from 'react'
import "./Header.css"
import TopButton from './TopButton.js'



function Header({header}) {
    return (
        <div className="header">
            <h1>{header}</h1>
        </div>
    )
}

export default Header