import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'

function Menu() {

	return (
		<Navbar sticky="top" bg="dark" variant="dark" expand="lg">
			<Container className='my-2'>
				<Navbar.Brand href="/">Weart</Navbar.Brand>
				<Navbar.Toggle aria-controls="main-navbar" className='ms-auto me-2' />
				<Navbar.Collapse id="main-navbar">
					<Nav className="mx-auto">
						<Nav.Link href="/about">Rólam</Nav.Link>
						<Nav.Link href="/portfolio">Portfólió</Nav.Link>
						<Nav.Link href="/posts">Blog</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Button href="/contact" variant="outline-white">Kapcsolat</Button>
			</Container>
		</Navbar>
	)
}

export default Menu