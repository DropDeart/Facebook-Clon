import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import PeopleIcon from '@material-ui/icons/People'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircleOutlined'
import StorefrontIcon from '@material-ui/icons/Storefront'
import Subscription from '@material-ui/icons/SubscriptionsOutlined'
import RestoreIcon from '@material-ui/icons/Restore'
import AssessmentIcon from '@material-ui/icons/Assessment'
import FlagIcon from '@material-ui/icons/Flag'
import EventIcon from '@material-ui/icons/Event'
import FiberNewIcon from '@material-ui/icons/FiberNew'
import { useStateValue } from '../StateProvider/StateProvider'


const SideBar = () => {
  const [{user}, dispatch] = useStateValue()
  return (
    <div className="Sidebar">
      <SidebarRow
        src={user.photoURL}
        title={user.displayName}
      />
      <SidebarRow fontSize="large" Icon={PeopleIcon} title="Find Friends" />
      <SidebarRow Icon={SupervisedUserCircleIcon} title="Groups" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={Subscription} title="Watch" />
      <SidebarRow Icon={RestoreIcon} title="Remembers" />
      <SidebarRow Icon={AssessmentIcon} title="Recordings" />
      <SidebarRow Icon={FlagIcon} title="Pages" />
      <SidebarRow Icon={EventIcon} title="Events" />
      <SidebarRow Icon={FiberNewIcon} title="The Newests" />
     
    </div>
  )
}

export default SideBar
