import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navBar.module.css'


const NavigationBar = () => {
    return (
        <Navbar className={styles.navBar}  collapseOnSelect expand="lg" bg="light" >
            <Container  >
                <Navbar.Brand  href="/"><span className={styles.fontblack}>Cuaresma </span><span className={styles.fontpurple}>Developer</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        
                        <Nav.Link href="#memes">
                        <span className={styles.fontpurple}>Skills</span>
                        </Nav.Link>
                        <Nav.Link href="projects">
                        <span className={styles.fontpurple}>Projects</span>
                        </Nav.Link>
                        <Nav.Link  href="#memes">
                        <span className={styles.fontpurple}>Contact</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
