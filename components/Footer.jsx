import React, { useState } from 'react'
import { Container, Nav } from 'react-bootstrap'
import { menu, footer } from "../helpers/texts-hu"

function Footer() {
	const [thisYear] = useState(new Date().getFullYear())
	return (
		<div className='bg-dark border-top'>

			{/* copyright bar */}
			<Container className='text-muted small py-4 text-center d-flex flex-column align-items-center'>

				<Nav className='mx-auto justify-content-center mb-0'>
					{ menu.items.map(
						(item,i) => ( <Nav.Link key={i} href={item.url}>{item.title}</Nav.Link> )
					)}
					<Nav.Link href="https://github.com/weartstudio">
						<i className="fa-brands fa-github"></i>
						<span className="ms-2">Github</span>
					</Nav.Link>
					<Nav.Link href="https://www.linkedin.com/in/balazsegyed/">
						<i className="fa-brands fa-linkedin"></i>
						<span className="ms-2">LinkedIn</span>
					</Nav.Link>
				</Nav>

				<p className='m-0'>{ footer.copyright } &copy; 2019 - {thisYear}</p>

			</Container>
		</div>
	)
}

export default Footer