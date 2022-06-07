import React from 'react'
import "./SidebarOption.css"

function HeaderOption({Icon, title}) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="headerOption_icon"/>}
      <h3 className="headerOption_title" link>{title}</h3>
    </div>
  )
}

export default HeaderOption