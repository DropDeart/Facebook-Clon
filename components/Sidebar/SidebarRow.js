import React from 'react'
import { Avatar } from '@material-ui/core'
import './SidebarRow.css'

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
        <h5>{title}</h5>
    </div>
  )
}

export default SidebarRow
