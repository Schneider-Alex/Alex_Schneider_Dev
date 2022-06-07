import React from 'react'
import "./SidebarOption.css"

function HeaderOption({Icon, title,link}) {
  return (
    <div className="sidebarOption">
      
      <a className="headerOption_title" href={'/' + link}>
        {Icon && <Icon className="headerOption_icon"/>}
        <h3>{title}</h3>
      </a>
    </div>
  )
}

export default HeaderOption