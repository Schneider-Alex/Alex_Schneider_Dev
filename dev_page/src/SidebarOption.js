import React from 'react'
import "./SidebarOption.css"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


function SidebarOption({Icon, title,link}) {
  return (
    <div className="sidebarOption">
      <a className="sidebarOption_title" href={'/' + link}>
        {Icon && <Icon className="sidebarOption_icon"/>}
        <h3><ArrowRightIcon/>{title}</h3>
      </a>
    </div>
  )
}

export default SidebarOption