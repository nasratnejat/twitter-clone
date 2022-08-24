import React from 'react'
import './Sidebarption.css'
function Sidebarption({ active, text, Icon }) {
	return (
		<div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
			<Icon />
			<h2>{text}</h2>
		</div>
	)
}

export default Sidebarption
