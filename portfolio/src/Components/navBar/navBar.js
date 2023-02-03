import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navBar.module.css'


const NavigationBar = () => {
    return (
        <Navbar className={styles.navBar}  collapseOnSelect expand="lg" bg="light" >
            <Container  >
                <Navbar.Brand  href="#home"><span className={styles.font}>Cuaresma Developer</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"><span className={styles.font}>About</span></Nav.Link>
                        <Nav.Link href="#memes">
                        <span className={styles.font}>Skills</span>
                        </Nav.Link>
                        <Nav.Link href="#memes">
                        <span className={styles.font}>Projects</span>
                        </Nav.Link>
                        <Nav.Link  href="#memes">
                        <span className={styles.font}>Contact</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
