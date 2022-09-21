import { Container, Navbar, Nav, Button } from 'react-bootstrap'

function Menu() {
	return (
		<Navbar variant='dark' bg='dark' expand='lg'>
			<Container>
				<Navbar.Brand href="/">weart</Navbar.Brand>
				<Navbar.Toggle aria-controls="main-navbar" className='ms-auto' />
				<Navbar.Collapse id="main-navbar">
					<Nav className="ms-auto">
						<Nav.Link href="/about">Rólam</Nav.Link>
						<Nav.Link href="/portfolio">Portfólió</Nav.Link>
						<Nav.Link href="/posts">Cikkek</Nav.Link>
						<Nav.Link href="/contact">Kapcsolat</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Menu