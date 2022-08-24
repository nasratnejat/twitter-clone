import React from 'react'
import './App.css'
import Sidebars from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'

function App() {
	return (
		<div className='app'>
			<Sidebars />
			<Feed />
			<Widgets />
		</div>
	)
}

export default App
