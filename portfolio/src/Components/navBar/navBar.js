import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navBar.module.css'
import ModalCurriculum from '../../modalCurriculum/modalCurriculum';
import luna from '../../assets/luna.png';
import sol from '../../assets/sol.png'
import { deleteStorageObject, getDarkMode, getIdioma, setStorageObject } from '../../utils/localStorageUtils';
import spain from '../../assets/spain.png';
import english from '../../assets/english.png'
import { useDarkModeContext } from '../../context/contextDarkMode';
import { useState } from 'react';



const NavigationBar = () => {
    const { triger, setTriger } = useDarkModeContext();
    const [expanded, setExpanded] = useState(false);

    let mode
    getDarkMode()
        ? mode = 'dark'
        : mode = 'light'

    return (

        <Navbar fixed='top' collapseOnSelect expanded={expanded} expand="lg" bg={mode} >
            <Container  >
                <Navbar.Brand href="/"><span className={getDarkMode() ? styles.fontwhite : styles.fontblack}> &lt;Cuaresma /&gt; </span><span className={styles.fontpurple}>Developer</span></Navbar.Brand>
                <Navbar.Toggle  className={getDarkMode() ? styles.togglerwhite : styles.toggler} onClick={()=>setExpanded(!expanded)} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/skills">
                            <span className={styles.fontpurple}>Skills</span>
                        </Nav.Link>
                        <Nav.Link href="/projects">
                            <span className={styles.fontpurple}>Projects</span>
                        </Nav.Link>
                        <Nav.Link>
                            <ModalCurriculum expanded={expanded} setExpanded={setExpanded}  />
                        </Nav.Link>
                        <Nav.Link >
                            {getDarkMode()
                                ? <img
                                    className={styles.sol}
                                    src={sol}
                                    onClick={() => {
                                        deleteStorageObject('dark-mode')
                                        setTriger(!triger)
                                        setExpanded(!expanded);                        
                                    }}
                                />
                                : <img
                                    className={styles.luna}
                                    src={luna}
                                    onClick={() => {
                                        setStorageObject('dark-mode', { 'darkMode': 'yes' })
                                        setTriger(!triger)
                                        setExpanded(!expanded);                                      
                                    }}
                                />
                            }
                        </Nav.Link>
                        <Nav.Link >
                            {getIdioma()
                                ? <img
                                    className={styles.iconIdioma}
                                    src={english}
                                    onClick={() => {
                                        deleteStorageObject('idioma')
                                        setTriger(!triger)  
                                        setExpanded(!expanded);                                 
                                    }}
                                />
                                : <img
                                    className={styles.iconIdioma}
                                    src={spain}
                                    onClick={() => {
                                        setStorageObject('idioma', { 'idioma': 'spain' })
                                        setTriger(!triger)  
                                        setExpanded(!expanded);                                    
                                    }}
                                />
                            }
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavigationBar;
