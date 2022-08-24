import React from 'react'
import './Sidebar.css'
import { Twitter } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Button } from '@mui/material'
import SidebarOption from './Sidebarption'
function Sidebar() {
	return (
		<div className='sidebar'>
			<Twitter className='sidebar--twitterIcon' /> Made by Nasrat Nejat
			<SidebarOption active Icon={HomeIcon} text='Home' />
			<SidebarOption Icon={SearchIcon} text='Explore' />
			<SidebarOption
				Icon={NotificationsNoneOutlinedIcon}
				text='Notifications'
			/>
			<SidebarOption Icon={MailOutlineIcon} text='Messages' />
			<SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks' />
			<SidebarOption Icon={ListAltIcon} text='Lists' />
			<SidebarOption Icon={PermIdentityIcon} text='Profile' />
			<SidebarOption Icon={MoreHorizIcon} text='More' />
			<Button variant='outlined' className='sidebar--tweet' fullWidth>
				Tweet
			</Button>
		</div>
	)
}

export default Sidebar
