import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navBar.module.css'
import ModalCurriculum from '../../modalCurriculum/modalCurriculum';
import luna from '../../assets/luna.png';
import sol from '../../assets/sol.png'
import { deleteStorageObject, getDarkMode, setStorageObject } from '../../utils/localStorageUtils';
import Contact from '../contact/contact';
import { useState } from 'react';
import { useDarkModeContext } from '../../context/contextDarkMode';



const NavigationBar = (props) => {
    const { triger, setTriger } = useDarkModeContext();
    const simbol = '<'
    const simbol2 = '/>'
    let mode
    getDarkMode()
        ? mode = 'dark'
        : mode = 'light'

    return (

        <Navbar fixed='top' collapseOnSelect expand="lg" bg={mode} >
            <Container  >
                <Navbar.Brand href="/portfolio"><span className={getDarkMode() ? styles.fontwhite : styles.fontblack}>{simbol}Cuaresma {simbol2} </span><span className={styles.fontpurple}>Developer</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/portfolio/skills">
                            <span className={styles.fontpurple}>Skills</span>
                        </Nav.Link>
                        <Nav.Link href="/portfolio/projects">
                            <span className={styles.fontpurple}>Projects</span>
                        </Nav.Link>
                        <Nav.Link>
                            <ModalCurriculum />
                        </Nav.Link>
                        <Nav.Link >
                            {getDarkMode()
                                ? <img
                                    className={styles.sol}
                                    src={sol}
                                    onClick={() => {
                                        deleteStorageObject('dark-mode')
                                        setTriger(!triger)
                                        // props.setReload(!props.reload)
                                    }}
                                />
                                : <img
                                    className={styles.luna}
                                    src={luna}
                                    onClick={() => {
                                        setStorageObject('dark-mode', { 'darkMode': 'yes' })
                                        setTriger(!triger)
                                        // props.setReload(!props.reload)
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
