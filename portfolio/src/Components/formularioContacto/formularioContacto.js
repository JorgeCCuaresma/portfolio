import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Spinner from 'react-bootstrap/Spinner';
import styles from './formularioContacto.module.css'

const FormularioContacto = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [showNewMessage, setShowNewMessage] = useState(true);
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");
    const [empty, setEmpty] = useState("")

    const getNotification = () => {
        setShowNewMessage(true)
        setTimeout(() => {
            setShowNewMessage(false);
            props.handleClose()
        }, [2500]);
    }


    const sendEmail = () => {

        setLoading(true)
        emailjs.sendForm('service_8glz861', 'template_v887hxo', form.current, 'Q8_7nmlQUEBVWtDpK')
            .then((result) => {
                setLoading(false)
                setResponse(result.text)
                getNotification()


            }, (error) => {
                setLoading(false)
                setError(error.text)
                setShowNewMessage(true)
                getNotification()
            });


    };

    return (
        <Form ref={form}>
            <Form.Group>
                <FloatingLabel className={styles.input} controlId="floatingTextarea" label="Name">
                    <Form.Control
                        required
                        name="user_name"
                        type="text"
                        placeholder="name"
                        onChange={(e) => {
                            setEmpty("")
                            setName(e.target.value)
                        }}
                    />
                </FloatingLabel>
            </Form.Group>
            <Form.Group >
                <FloatingLabel className={styles.input} controlId="floatingInput" label="Email adress">
                    <Form.Control
                        required
                        name="user_email"
                        type="email"
                        placeholder="name@email.com"
                        onChange={(e) => {
                            setEmpty("")
                            setEmail(e.target.value)
                        }}
                    />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
                <FloatingLabel className={styles.inputTextArea} controlId="floatingTextarea2" label="Message">
                    <Form.Control
                        required
                        name="message"
                        as="textarea"
                        style={{ height: '100px' }}
                        placeholder="Type here"
                        onChange={(e) => {
                            setEmpty("")
                            setText(e.target.value)
                        }}
                    />
                </FloatingLabel>
            </Form.Group>
            <div className={styles.containerButton}>
                <button className={styles.button} onClick={() => {
                    if (!name || !email || !text) {
                        setEmpty("Hay campos sin rellenar")
                        return
                    }
                    sendEmail()
                }}>
                    {loading ? (<>Sending < Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /></>) : 'Submit'}
                </button>
                {empty && empty}
                {showNewMessage && response && (<div className={styles.message}>Mensaje enviado</div>)}
                {showNewMessage && error && (<div className={styles.message}>No se puedo enviar el mensaje</div>)}

            </div>
        </Form>
    )
}

export default FormularioContacto