import React from 'react'
import "./TopButton.css"
import NavigationRoundedIcon from '@mui/icons-material/NavigationRounded';

function TopButton() {
    return (
        <div className="topButton">
            <div className="topButton_wrapper">
                <p>^</p>
                <a href="#top"><button className="topButton_wrapper">Return to Top</button></a>
            </div>
        </div>
    )
}

export default TopButton