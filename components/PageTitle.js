import React from 'react'

function PageTitle({ title }) {
	return (
		<h1 className="h2 mb-5">
			<span>{title}</span>
			<span className='text-primary'>.</span>
		</h1>
	)
}

export default PageTitle