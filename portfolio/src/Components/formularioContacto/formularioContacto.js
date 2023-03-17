import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Spinner from 'react-bootstrap/Spinner';
import styles from './formularioContacto.module.css'
import { getDarkMode, getIdioma } from '../../utils/localStorageUtils';

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


    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
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
                <FloatingLabel className={styles.input} controlId="floatingTextarea" label={!getIdioma() ? "Name" : "Nombre"}>
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
                <FloatingLabel className={styles.input} controlId="floatingInput" label={!getIdioma() ? "Email adress" : "Correo electrónico"}>
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
                <FloatingLabel className={styles.inputTextArea} controlId="floatingTextarea2" label={!getIdioma() ? "Message" : "Mensaje"}>
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
                <button className={styles.button} onClick={(e) => {
                    if (!name || !email || !text) {
                        setEmpty("Hay campos sin rellenar")
                        return
                    }
                    sendEmail(e)
                }}>
                    {loading && !getIdioma()
                        ? (<>Sending < Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /></>)
                        : loading && getIdioma()
                            ? (<>Enviando < Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /></>)
                            : !loading && !getIdioma()
                                ? 'Submit'
                                : 'Enviar'
                    }

                </button>
                {getIdioma() && empty && (<div className={getDarkMode()? styles.spanwhite : styles.span}>{empty}</div>)}
                {!getIdioma() && empty && (<div className={getDarkMode()? styles.spanwhite : styles.span}>There are empty fields</div>)}
                {getIdioma() && showNewMessage && response && (<div className={styles.message}>Mensaje enviado</div>)}
                {!getIdioma() && showNewMessage && response && (<div className={styles.message}>Message sent</div>)}
                {getIdioma() &&showNewMessage && error && (<div className={styles.message}>No se puedo enviar el mensaje</div>)}
                {!getIdioma() &&showNewMessage && error && (<div className={styles.message}>Can't send the message</div>)}

            </div>
        </Form>
    )
}

export default FormularioContacto