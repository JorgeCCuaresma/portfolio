import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" >
            <Container>
                <Navbar.Brand href="#home">Cuaresma Developer</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">About</Nav.Link>
                        <Nav.Link href="#memes">
                            Skills
                        </Nav.Link>
                        <Nav.Link href="#memes">
                            Projects
                        </Nav.Link>
                        <Nav.Link href="#memes">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
