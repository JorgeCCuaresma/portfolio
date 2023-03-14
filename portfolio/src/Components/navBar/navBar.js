import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navBar.module.css'
import curriculum from '../../assets/curriculum.pdf'
import Contact from '../contact/contact';



const NavigationBar = () => {
    
    const simbol = '<'
    const simbol2 = '/>'
    const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = curriculum;
        link.download = 'Cv_Jorge_Cuesta_Cuaresma.pdf';
        link.click();
    }
    return (

        <Navbar fixed='top' collapseOnSelect expand="lg" bg="light" >
            <Container  >
                <Navbar.Brand href="/"><span className={styles.fontblack}>{simbol}Cuaresma {simbol2} </span><span className={styles.fontpurple}>Developer</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/skills">
                            <span className={styles.fontpurple}>Skills</span>
                        </Nav.Link>
                        <Nav.Link href="projects">
                            <span className={styles.fontpurple}>Projects</span>
                        </Nav.Link>
                        <Nav.Link >
                            <Contact/>
                        </Nav.Link>
                        <Nav.Link>
                            <span onClick={downloadPdf} className={styles.fontpurple}>CV</span>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavigationBar;
