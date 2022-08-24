import React, { forwardRef } from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import RepeatOneOutlinedIcon from '@mui/icons-material/RepeatOneOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined'

const Post = forwardRef(
	(
		{ displayName, username, verified, timestamp, text, image, avatar },
		ref
	) => {
		return (
			<div className='post' ref={ref}>
				<div className='post__avatar'>
					<Avatar src={avatar} />
				</div>
				<div className='post__body'>
					<div className='post__header'>
						<div className='post__headerText'>
							<h3>
								{displayName}
								<span className='post__headerSpecial'>
									{verified && <VerifiedIcon className='post__badge' />} @
									{username}
								</span>
							</h3>
						</div>
						<div className='post__headerDescription'>
							<p>{text}</p>
						</div>
					</div>
					<img src={image} alt='' />
					<div className='post__footer'>
						<ChatBubbleOutlineOutlinedIcon fontSize='small' />
						<RepeatOneOutlinedIcon fontSize='small' />
						<FavoriteBorderOutlinedIcon fontSize='small' />
						<PublishOutlinedIcon fontSize='small' />
					</div>
				</div>
			</div>
		)
	}
)
export default Post
