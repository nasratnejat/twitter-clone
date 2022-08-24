import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material'
import db from './firebase'
import { collection, addDoc } from 'firebase/firestore'

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState([])
	const [tweetImage, setTweetImage] = useState('')

	const sendTweet = (e) => {
		e.preventDefault()

		const docref = addDoc(collection(db, 'posts'), {
			displayName: 'Nasrat Nejat',
			username: 'nasrat_nejat',
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar:
				'https://media-exp1.licdn.com/dms/image/C5603AQF4C-38JwWoOA/profile-displayphoto-shrink_800_800/0/1627961729227?e=1666828800&v=beta&t=KSvRJzQyb6Hu2D92YCRs1HwQmvKPmbL7LI2GiZighZM',
		})

		setTweetMessage('')
		setTweetImage('')
	}

	return (
		<div className='tweetBox'>
			<form>
				<div className='tweetBox__input'>
					<Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQF4C-38JwWoOA/profile-displayphoto-shrink_800_800/0/1627961729227?e=1666828800&v=beta&t=KSvRJzQyb6Hu2D92YCRs1HwQmvKPmbL7LI2GiZighZM'></Avatar>
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="what's happening"
						type='text'></input>
				</div>
				<input
					value={tweetImage}
					onChange={(e) => setTweetImage(e.target.value)}
					className='tweetBox__imageInput'
					placeholder='Optional: Enter Image URl'
					type='text'></input>
				<Button
					onClick={sendTweet}
					type='submit'
					variant='outlined'
					className='tweetBox__tweetButton'>
					Tweet
				</Button>
			</form>
		</div>
	)
}

export default TweetBox
