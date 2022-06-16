import React from 'react'
import "./TopButton.css"

function TopButton() {
    return (
        <div className="topButton">
                <a href="#top" className="topButton_wrapper"><p>^</p><button>Return to Top</button></a>
        </div>
    )
}

export default TopButton