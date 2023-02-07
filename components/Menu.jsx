import { Container, Navbar, Nav } from "react-bootstrap"
import { menu } from "../helpers/texts-hu"

export default function Menu() {
	return (
		<Navbar expand="lg" bg="dark" variant="dark" className="py-3">
			<Container fluid="xl">
				<Navbar.Brand href="/" className="font-monospace" style={{letterSpacing: 3}}>{`<weart />`}</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
						{ menu.items.map(
							(item,i) => ( <Nav.Link key={i} href={item.url}>{item.title}</Nav.Link> )
						)}
            <Nav.Link href="https://github.com/weartstudio">
							<i className="fa-brands fa-github"></i>
							<span className="d-lg-none ms-lg-0 ms-2">Github</span>
						</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/balazsegyed/">
							<i className="fa-brands fa-linkedin"></i>
							<span className="d-lg-none ms-lg-0 ms-2">LinkedIn</span>
						</Nav.Link>
          </Nav>
        </Navbar.Collapse>
			</Container>
		</Navbar>
	)
}