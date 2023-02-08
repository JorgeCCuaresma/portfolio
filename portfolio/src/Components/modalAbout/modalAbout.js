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
                <Modal.Body className={styles.modal}><h5>Hola de nuevo 🖖, me presento soy Jorge Cuesta y soy desarrollador full stack junior.<br /><br />
                    Me siento muy afortunado de formar parte del mundo de la tecnología. Estoy lleno de ilusión y motivación por aprender y crecer en mi carrera.<br /><br />
                    Los proyectos en los que he trabajado incluyen experiencia en desarrollo web con tecnologías como HTML, CSS, JavaScript, utilizando librerias como React,
                    Bootstrap Socket.io, a nivel backend he trabajado con Node.js, Express, MongoDB, Mongoose, Insomnia, entre otros.<br /><br />
                    Me esfuerzo por mantenerme actualizado en las últimas tendencias y tecnologías, y estoy siempre abierto a aprender y adquirir nuevos conocimientos.
                    Mi objetivo es convertirme en un desarrollador full stack senior y brindar soluciones de alta calidad a mis clientes.<br /><br />
                    Me encanta trabajar en equipo y colaborar con otros desarrolladores para alcanzar objetivos comunes. Soy una persona muy positiva, proactiva y dedicada, y siempre
                    estoy dispuesto a dar lo mejor de mí para lograr mis metas.<br /><br />
                    Si estás buscando un desarrollador full stack junior motivado y con muchas ganas de aprender,
                    no dudes en contactarme. Estoy emocionado de ver lo que podemos lograr juntos.

                    GIT, REST API
                </h5>
                </Modal.Body>
            </Modal>
        </div>
    );
}



export default ModalAbout;