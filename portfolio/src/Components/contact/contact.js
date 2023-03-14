import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import styles from './contact.module.css'

const Contact = () => {
    const [show, setShow] = useState(false);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [text, setText] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span onClick={handleShow} className={styles.fontpurple}>Contact</span>

            <Offcanvas className={styles.container} show={show} placement='end' onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className={styles.canvasTitle}><p>Contact Me</p></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='name'
                                autoFocus
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@email.com"
                                autoFocus
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control
                             as="textarea"
                              rows={3} 
                              placeholder="Type here"
                              onChange={(e)=>setText(e.target.value)}
                              />
                        </Form.Group>
                    </Form>
                    <button className={styles.button} onClick={()=> console.log(name,email,text)}>
                        Submit
                    </button>
                </Offcanvas.Body>
            </Offcanvas>
        </>

    )
};

export default Contact;





