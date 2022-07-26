import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import StorefrontIcon from '@material-ui/icons/Storefront'
import Subscription from '@material-ui/icons/SubscriptionsOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircleOutlined'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import { Avatar } from '@material-ui/core' //Material UI Avatar API
import { IconButton } from '@material-ui/core' //Material UI Icon Button API
import MessageIcon from '@material-ui/icons/Message'
import AddIcon from '@material-ui/icons/Add'
import { useStateValue } from '../StateProvider/StateProvider'

const Header = () => {
  const [{user}, dispatch] = useStateValue()
  return (
    /*Header Left  Section  Facebook*/
    <div className="header">
      <div className="header_left">
        <img
          src="https://img.icons8.com/color/48/FA5252/facebook-new.png"
          alt=""
        />
        <div className="header_input">
          <SearchIcon fontSize="large" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/*Header Mıddle  Section  Facebook*/}
      <div className="header_middle">
        <div
          className="header_option 
        header_option_active"
        >
          <IconButton>
            <HomeIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="header_option">
          <IconButton>
            <Subscription fontSize="large" />
          </IconButton>
        </div>
        <div className="header_option">
          <IconButton>
            <StorefrontIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="header_option">
          <IconButton>
            <SupervisedUserCircleIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      {/*Header Right  Section  Facebook*/}
      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <div>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <MessageIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Header
