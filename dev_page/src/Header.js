import React from 'react'
import "./Header.css"

import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function Header({Icon}) {
    return (
        <div className="header">
            <Icon className="header_icon"/>
        </div>
    )
}

export default Header