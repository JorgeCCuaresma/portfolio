import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FormularioContacto from '../formularioContacto/formularioContacto';
import styles from './contact.module.css'
import { getDarkMode, getIdioma } from '../../utils/localStorageUtils';



const Contact = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let mode
    getDarkMode()
        ? mode = 'dark'
        : mode = 'light'



    return (
        <>
            <div>
                {!getIdioma()
                    ? <button onClick={handleShow} className={styles.button2}>Contact 📧</button>
                    : <button onClick={handleShow} className={styles.button2}>Contacto 📧</button>
                }
            </div>
            <Offcanvas bg={mode} className={getDarkMode() ? styles.containerDark : styles.container} show={show} placement='end' onHide={handleClose}>
                <div className={styles.card}>
                    <Offcanvas.Header closeButton>
                        {!getIdioma()
                            ? <Offcanvas.Title className={styles.canvasTitle}><p>Contact Me</p></Offcanvas.Title>
                            : <Offcanvas.Title className={styles.canvasTitle}><p>Contáctame</p></Offcanvas.Title>
                        }
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <FormularioContacto handleClose={handleClose} />
                    </Offcanvas.Body>
                </div>
            </Offcanvas>
        </>

    )
};

export default Contact;




