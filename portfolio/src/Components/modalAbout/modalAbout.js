import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './modalAbout.module.css'

function ModalAbout() {

    const [show, setShow] = useState(false);

    return (
        <div className={styles.container}>
            <Button className={styles.button} onClick={() => setShow(true)}>
                About me 💬
            </Button>
            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
            >
                <Modal.Body className={styles.modal}><h5>Hola de nuevo 🖖, me presento soy Jorge Cuesta y soy desarrollador junior.<br />
                    Soy un entusiasta de la tecnología,
                </h5>
                </Modal.Body>
            </Modal>
        </div>
    );
}



export default ModalAbout;