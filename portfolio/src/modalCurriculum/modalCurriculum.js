import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import curriculum from '../assets/curriculum.pdf'
import curriculum2 from '../assets/curriculum2.png'
import styles from './modalCurriculum.module.css'
import { getDarkMode, getIdioma } from '../utils/localStorageUtils';

const ModalCurriculum = ({expanded, setExpanded}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () =>{
         setShow(true)
         setExpanded(!expanded)
        };

    const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = curriculum;
        link.download = 'Cv_Jorge_Cuesta_Cuaresma.pdf';
        link.click();
    }

    return (
        <>
            <div>
                <span onClick={handleShow} className={styles.fontpurple}>CV</span>
            </div>
            <Modal
                className={styles.modal}
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <div className={getDarkMode() ? styles.cardDark : styles.card}>
                    <Modal.Header className={styles.title} closeButton>
                        <Modal.Title><p>Curriculum Vitae Jorge Cuesta</p></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={styles.body}>
                        <img className={styles.imagen} src={curriculum2}></img>
                    </Modal.Body>

                    <Modal.Footer>
                        {!getIdioma()
                            ?<button className={styles.button} variant="primary" onClick={downloadPdf}>Download</button>
                            :<button className={styles.button} variant="primary" onClick={downloadPdf}>Descargar</button>                        
                        }
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}

export default ModalCurriculum;