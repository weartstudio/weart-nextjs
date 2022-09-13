import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import Image from 'next/image';

function Menu() {
	return (
		<Navbar variant="light" expand="lg">
			<Container className='my-2'>
				<Navbar.Brand href="/"><Image src="/logo.png" width="99" height="35" /></Navbar.Brand>
				<Navbar.Toggle aria-controls="main-navbar" className='ms-auto me-2' />
				<Navbar.Collapse id="main-navbar">
					<Nav className="mx-autoo">
						<Nav.Link href="/about">Rólam</Nav.Link>
						<Nav.Link href="/portfolio">Portfólió</Nav.Link>
						<Nav.Link href="/posts">Blog</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Button href="/contact" variant="outline-primary">Kapcsolat</Button>
			</Container>
		</Navbar>
	)
}

export default Menu