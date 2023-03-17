import styles from './projects.module.css'
import todoApp from '../../assets/todoapp.mp4'
import skuadLack from '../../assets/skuadlack1.mp4'
import logoSkuadlack from '../../assets/logoSkuadLack.png'
import publicChat from '../../assets/publicChat.mp4'
import { getDarkMode } from '../../utils/localStorageUtils'
import { useDarkModeContext } from '../../context/contextDarkMode'



const Projects = () => {
    const { triger, setTriger } = useDarkModeContext()
    return (
        <div className={getDarkMode() ? styles.containerDark : styles.container}>
            <h1>Projects</h1>
            <div className={styles.containerCards}>
                <div className={styles.cards}>
                    <video src={skuadLack} type="video/mp4" autoPlay loop muted controls />
                    <div className={styles.description}>
                        <h3><img width='40' src={logoSkuadlack} />SkuadLack</h3>
                        <p className={styles.frase}>SkuadLack es un clon con personalidad propia de Slack que permite la comunicación entre organizaciones teniendo la posibilidad de crear chats independientes dentro de los usuarios de una organización o canales temáticos para diferentes usuarios
                            Mediante el sistema de notificaciones y envío de imágenes el usuario tiene las herramientas necesarias para una comunicación fluida y efectiva.<br />
                            Es un proyecto desarrollado durante el BootCamp en Nuclio Digital School con las siguientes tecnologías HTML, CSS,
                            JavaScript, ReactJS utilizando librerías como Bootstrap, Socket.io, Cloudinary,  a nivel
                            backend, Node.js, Express, MongoDB, Mongoose, Mailgun, JsonWebToken entre otros.
                            En este, trabajamos un equipo de 5 personas
                            organizados en backend y frontend, rotando responsabilidades y liderazgo
                            del proyecto. La metodología usada fué Scrum, con sprints de 15 días y sprints reviews cada final de sprint.

                        </p>
                        <a href='https://skuadlack.netlify.app/' target='_blank'>Visitar sitio</a><br />
                        <a href='https://github.com/nds-fsd/slack' target='_blank'>Repositorio</a>
                    </div>

                </div>
                <div className={styles.cards}>
                    <video src={publicChat} type="video/mp4" autoPlay loop muted controls />
                    <div className={styles.description}>
                        <h3>Public Chat</h3>
                        <p className={styles.frase}>Pequeña demo de chat con conexión por websocket que desarrolle en el proyecto que teníamos en equipo, la librería utilizada es socket.io tanto para front como para back, los componentes utilizados son mediante ReactJs, y el servidor es de ExpressJS con una MongoDB y Mongoose como librería de conexión contra esta.

                            Este pequeño chat funciona de la siguiente manera, el mensaje se manda desde cliente a nuestro servidor, que mediante un end-point se guarda en bbdd y a su vez emite un socket con un evento que aquel cliente que este suscrito a dicho evento escuchará y seguidamente se parsea la lista de mensajes, dejando además constancia de estos, de ahí el utilizar bbdd.

                        </p>
                        <a href='https://skuadlack.netlify.app/' target='_blank'>Visitar sitio</a><br />
                        <a href='https://github.com/nds-fsd/slack' target='_blank'>Repositorio</a>
                    </div>

                </div>
                <div className={styles.cards}>
                    <video src={todoApp} type="video/mp4" autoPlay loop muted controls />
                    <div className={styles.description}>
                        <h3>To-Do App</h3>
                        <p className={styles.frase}>My To-Do App es uno de los primeros retos que desarrolle en el bootcamp, usando para la parte front-end, componentes funcionales mediante ReactJS, y para la parte back-end una pequeña API REST de ExpressJS, con conexión a un contenedor de docker con bbdd de Mongo y Mongoose como libreria de conexión contra esta.</p>
                        <a href='https://github.com/JorgeCCuaresma/todoApp' target='_blank'>Repositorio</a>
                    </div>
                </div>

                <div className={styles.cards}> </div>
            </div>
        </div>
    )
}


export default Projects