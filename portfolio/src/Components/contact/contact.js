import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FormularioContacto from '../formularioContacto/formularioContacto';
import styles from './contact.module.css'



const Contact = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





    return (
        <>
            <button onClick={handleShow} className={styles.button2}>Contact</button>
            <Offcanvas className={styles.container} show={show} placement='end' onHide={handleClose}>
                <div className={styles.card}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className={styles.canvasTitle}><p>Contact Me</p></Offcanvas.Title>
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




