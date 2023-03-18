import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getDarkMode, getIdioma } from '../../utils/localStorageUtils';
import styles from './modalAbout.module.css'

function ModalAbout() {

    const [show, setShow] = useState(false);

    return (
        <div className={styles.container}>

            {!getIdioma()
                ? <Button className={styles.button} onClick={() => setShow(true)}>About me 💬</Button>
                : <Button className={styles.button} onClick={() => setShow(true)}>Sobre mi 💬</Button>
            }
            <Modal
                className={styles.modal}
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                centered

            >
                <div className={getDarkMode() ? styles.cardDark : styles.card} >
                    <Modal.Header className={getDarkMode() ? styles.modalHeader : ""} closeButton closeVariant={getDarkMode() ? 'white' : ''} >
                        {getIdioma()
                            ? <Modal.Title className={styles.header}>Sobre mi</Modal.Title>
                            : <Modal.Title className={styles.header}>About me</Modal.Title>}
                    </Modal.Header>
                    {!getIdioma()
                        ? <Modal.Body className={styles.body}><h5>Hello again 🖖, let me introduce myself, I'm Jorge Cuesta and I'm a junior full stack developer. <br /><br />
                            The projects I have worked on include web development experience using technologies such as HTML, CSS, JavaScript, and libraries such as React, Bootstrap, Socket.io. On the backend, I have worked with Node.js, Express, MongoDB, Mongoose, Insomnia, among others. <br /><br />
                            I strive to stay up-to-date with the latest trends and technologies, and I am always open to learning and acquiring new knowledge. My goal is to become a senior full stack developer and provide high-quality solutions to my clients. <br /><br />
                            I love working in a team and collaborating with other developers to achieve common goals. I am a very positive, proactive, and dedicated person, and I am always willing to give my best to achieve my goals.
                        </h5>
                        </Modal.Body>
                        : <Modal.Body className={styles.body}><h5>Hola de nuevo 🖖, me presento soy Jorge Cuesta y soy desarrollador full stack junior.<br /><br />
                            Los proyectos en los que he trabajado incluyen experiencia en desarrollo web con tecnologías como HTML, CSS, JavaScript, utilizando librerias como React,
                            Bootstrap Socket.io, a nivel backend he trabajado con Node.js, Express, MongoDB, Mongoose, Insomnia, entre otros.<br /><br />
                            Me esfuerzo por mantenerme actualizado en las últimas tendencias y tecnologías, y estoy siempre abierto a aprender y adquirir nuevos conocimientos.
                            Mi objetivo es convertirme en un desarrollador full stack senior y brindar soluciones de alta calidad a mis clientes.<br /><br />
                            Me encanta trabajar en equipo y colaborar con otros desarrolladores para alcanzar objetivos comunes. Soy una persona muy positiva, proactiva y dedicada, y siempre
                            estoy dispuesto a dar lo mejor de mí para lograr mis metas.
                        </h5>
                        </Modal.Body>
                    }
                </div>
            </Modal>
        </div>
    );
}



export default ModalAbout;