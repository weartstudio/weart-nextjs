import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Container, Navbar, Nav } from 'react-bootstrap'

function Menu() {

	return (
		<Navbar sticky="top" bg="dark" variant="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/">Weart</Navbar.Brand>
				<Navbar.Toggle aria-controls="main-navbar" />
				<Navbar.Collapse id="main-navbar">
					<Nav className="ms-auto">
						<Nav.Link href="/about">Rólam</Nav.Link>
						<Nav.Link href="/portfolio">Portfólió</Nav.Link>
						<Nav.Link href="/posts">Blog</Nav.Link>
						<Nav.Link href="/contact">Kapcsolat</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Menu