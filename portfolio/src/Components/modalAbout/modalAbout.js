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
                className={styles.modal}
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                centered
               
            >
                <div className={styles.card}>
                <Modal.Header closeButton/>
                <Modal.Body className={styles.body}><h5>Hola de nuevo 🖖, me presento soy Jorge Cuesta y soy desarrollador full stack junior.<br /><br />
                    Los proyectos en los que he trabajado incluyen experiencia en desarrollo web con tecnologías como HTML, CSS, JavaScript, utilizando librerias como React,
                    Bootstrap Socket.io, a nivel backend he trabajado con Node.js, Express, MongoDB, Mongoose, Insomnia, entre otros.<br /><br />
                    Me esfuerzo por mantenerme actualizado en las últimas tendencias y tecnologías, y estoy siempre abierto a aprender y adquirir nuevos conocimientos.
                    Mi objetivo es convertirme en un desarrollador full stack senior y brindar soluciones de alta calidad a mis clientes.<br /><br />
                    Me encanta trabajar en equipo y colaborar con otros desarrolladores para alcanzar objetivos comunes. Soy una persona muy positiva, proactiva y dedicada, y siempre
                    estoy dispuesto a dar lo mejor de mí para lograr mis metas.
                </h5>
                </Modal.Body>
                </div>
            </Modal>
        </div>
    );
}



export default ModalAbout;