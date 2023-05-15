import styles from './projects.module.css'
import todoApp from '../../assets/todoapp.mp4'
import skuadLack from '../../assets/skuadlack1.mp4'
import logoSkuadlack from '../../assets/logoSkuadLack.png'
import publicChat from '../../assets/publicChat.mp4'
import movieApp from '../../assets/movieApp.mp4'
import translate from '../../assets/translate.mp4'
import redux from '../../assets/crud-ReduxToolkit.mp4'
import jsQuiz from '../../assets/javascript quiz.mp4'

import { getDarkMode, getIdioma } from '../../utils/localStorageUtils'
import { useDarkModeContext } from '../../context/contextDarkMode'



const Projects = () => {
    const { triger, setTriger } = useDarkModeContext()
    return (
        <div className={getDarkMode() ? styles.containerDark : styles.container}>
            <h1>Projects</h1>
            <div className={styles.containerCards}>
                <div className={styles.cards}>
                    <video src={translate} type="video/mp4" autoPlay loop muted controls />
                    <div className={styles.description}>
                        <h3>Cuaresma Translate</h3>
                        {getIdioma()
                            ? <>
                                <p className={styles.frase}>Cuaresma Translate es un clon de Google Translate.<br /> Las tecnologías utilizadas son ReactJS con Vite y TypeScript, la traducción
                                    la ejecuta el modelo gpt-3.5-turbo de openAI, los estados son controlados mediante el Hook useReducer de ReactJS y el resultado esta controlado por un Debounce.
                                    También tiene agregada la funcionalidad para copiar la traducción y escucharla con la pronunciación en su idioma.
                                </p>
                                <a href='https://github.com/JorgeCCuaresma/translate' target='_blank' rel="noopener noreferrer">Repositorio</a>
                            </>
                            : <>
                                <p className={styles.frase}>Cuaresma Translate is a Google Translate clone.<br /> The technologies used are ReactJS with Vite and TypeScript, and the translation is
                                    executed by the gpt-3.5-turbo model from OpenAI. The states are controlled through the useReducer hook of ReactJS and the result is controlled by a Debounce. It also
                                    has added functionality to copy the translation and listen to it with the pronunciation in its language.
                                </p>
                                <a href='https://github.com/JorgeCCuaresma/translate' target='_blank' rel="noopener noreferrer">Repository</a>
                            </>

                        }

                    </div>

                </div>
                <div className={styles.cards}>
                    <video src={jsQuiz} type="video/mp4" autoPlay loop muted controls />
                    <div className={styles.description}>
                        <h3>JavaScript Quiz</h3>
                        {getIdioma()
                            ? <>
                                <p className={styles.frase}>JavaScript Quiz es una app de preguntas y respuestas esta desarrollada con ReactJs y Zustand como libreria de control del estado global.<br />

                                </p>
                                <a href='https://github.com/JorgeCCuaresma/javascript-quiz' target='_blank' rel="noopener noreferrer">Repositorio</a>
                            </>
                            : <>
                                <p className={styles.frase}>
                                JavaScript Quiz is a quiz app developed with ReactJs and Zustand as the global state management library.
                                </p>
                                <a href='https://github.com/JorgeCCuaresma/javascript-quiz' target='_blank' rel="noopener noreferrer">Repository</a>
                            </>

                        }

                    </div>

                </div>

                <div className={styles.cards}>
                    <video src={skuadLack} type="video/mp4" autoPlay loop muted controls />
                    <div className={styles.description}>
                        <h3><img width='40' src={logoSkuadlack} />SkuadLack</h3>
                        {getIdioma()
                            ? <>
                                <p className={styles.frase}>SkuadLack es un clon con personalidad propia de Slack que permite la comunicación entre organizaciones teniendo la posibilidad
                                    de crear chats independientes dentro de los usuarios de una organización o canales temáticos para diferentes usuarios.
                                    Mediante el sistema de notificaciones y envío de imágenes el usuario tiene las herramientas necesarias para una comunicación fluida y efectiva.<br />
                                    Es un proyecto desarrollado durante el BootCamp en Nuclio Digital School con las siguientes tecnologías HTML, CSS,
                                    JavaScript, ReactJS utilizando librerías como Bootstrap, Socket.io, Cloudinary,  a nivel
                                    backend, Node.js, Express, MongoDB, Mongoose, Mailgun, JsonWebToken entre otros.
                                    En este, trabajamos un equipo de 5 personas
                                    organizados en backend y frontend, rotando responsabilidades y liderazgo
                                    del proyecto. La metodología usada fué Scrum, con sprints de 15 días y sprints reviews cada final de sprint.
                                </p>
                                <a href='https://skuadlack.netlify.app/' target='_blank' rel="noopener noreferrer">Ir al sitio</a><br />
                                <a href='https://github.com/nds-fsd/slack' target='_blank' rel="noopener noreferrer">Repositorio</a>
                            </>
                            : <>
                                <p className={styles.frase}>SkuadLack is a clone with its own personality of Slack that allows communication between organizations, with the possibility of creating independent chats
                                    within the users of an organization or thematic channels for different users. Using the notification system and image sending, the user has the necessary tools
                                    for smooth and effective communication.<br />This is a project developed during the BootCamp at Nuclio Digital School using the following technologies: HTML, CSS,
                                    JavaScript, ReactJS, and libraries such as Bootstrap, Socket.io, Cloudinary, at the backend, Node.js, Express, MongoDB, Mongoose, Mailgun, JsonWebToken, among others.
                                    We worked as a team of 5 people, organized in backend and frontend, rotating responsibilities and project leadership. The methodology used was Scrum, with 15-day sprints
                                    and sprint reviews at the end of each sprint.
                                </p>
                                <a href='https://skuadlack.netlify.app/' target='_blank' rel="noopener noreferrer">Go to the site</a><br />
                                <a href='https://github.com/nds-fsd/slack' target='_blank' rel="noopener noreferrer">Repository</a>
                            </>

                        }

                    </div>

                </div>
                <div className={styles.cards}>
                    <video src={redux} type="video/mp4" autoPlay loop muted controls />
                    <div className={styles.description}>
                        <h3>Crud React and Redux Toolkit</h3>
                        {getIdioma()
                            ? <>
                                <p className={styles.frase}>Es un pequeño proyecto con la finalidad de crear un CRUD con React y Redux Toolkit.<br />
                                    Tenemos un estado inicial y unos reducers que efectuaran ciertos cambios en el estado a parte contamos con dos middlewares, uno de ellos guarda cada cambio en el estado en el
                                    localStorage del navegador para simular la persistencia de datos como si de una BBDD se tratara y el otro nos despliega unas notificaciones en la parte inferior derecha de la
                                    pagina en cada cambio en el estado. <br /> Como se puede observar al final del video borrando la key guardada en localStorage regresamos al estado inicial de la store.
                                </p>
                                <a href='https://github.com/JorgeCCuaresma/crud-react-redux' target='_blank' rel="noopener noreferrer">Repositorio</a>
                            </>
                            : <>
                                <p className={styles.frase}>
                                    It is a small project with the purpose of creating a CRUD with React and Redux Toolkit.<br /> We have an initial state and some reducers that will make certain changes to the state. In addition, we have two
                                    middlewares, one of them saves each change in the state to the browser's localStorage to simulate data persistence as if it were a database, and the other displays notifications in the bottom right of the page
                                    with each change in the state.<br /> As can be seen at the end of the video, deleting the saved key in localStorage returns us to the initial state of the store.
                                </p>
                                <a href='https://github.com/JorgeCCuaresma/crud-react-redux' target='_blank' rel="noopener noreferrer">Repository</a>
                            </>

                        }

                    </div>

                </div>
                <div className={styles.cards}>
                    <video src={movieApp} type="video/mp4" autoPlay loop muted controls />
                    <div className={styles.description}>
                        {!getIdioma()
                            ? <h3>MovieApp</h3>
                            : <h3>MovieApp</h3>
                        }
                        {getIdioma()
                            ? <>
                                <p className={styles.frase}>MovieApp es un app web con la que podremos acceder a cualquier título de cualquier película mediante una busqueda y obtener una lista con los resultados.
                                    Esta búsqueda apunta a la API de Online Movie Database, que por una query y según el párametro de busqueda obtendremos dichos resultados.
                                    <br /><br />MovieApp esta desarrollada con ReactJs, Tailwind y TypeScript.

                                </p>
                                <a href='https://github.com/JorgeCCuaresma/movieApp' target='_blank' rel="noopener noreferrer">Repositorio</a>
                            </>
                            : <>
                                <p className={styles.frase}>MovieApp is a web app that allows us to access any movie title through a search and obtain a list of results. This search points to the Online Movie Database
                                    API, which, based on a query and the search parameter, will provide us with these results.
                                    <br /><br />MovieApp is developed with ReactJs, Tailwind, and TypeScript.

                                </p>
                                <a href='https://github.com/JorgeCCuaresma/movieApp' target='_blank' rel="noopener noreferrer">Repository</a>
                            </>
                        }
                    </div>

                </div>
                <div className={styles.cards}>
                    <video src={publicChat} type="video/mp4" autoPlay loop muted controls />
                    <div className={styles.description}>
                        {!getIdioma()
                            ? <h3>Public Chat</h3>
                            : <h3>Chat Público</h3>
                        }
                        {getIdioma()
                            ? <>
                                <p className={styles.frase}>Pequeña demo de chat con conexión por websocket que desarrolle en el proyecto que teníamos en equipo, la librería utilizada es socket.io tanto para front como
                                    para back, los componentes utilizados son mediante ReactJs, y el servidor es de ExpressJS con una MongoDB y Mongoose como librería de conexión contra esta. Este pequeño chat funciona de
                                    la siguiente manera, el mensaje se manda desde cliente a nuestro servidor, que mediante un end-point se guarda en bbdd y a su vez emite un socket con un evento que aquel cliente que este
                                    suscrito a dicho evento escuchará y seguidamente se parsea la lista de mensajes, dejando además constancia de estos, de ahí el utilizar bbdd.

                                </p>
                                <a href='https://skuadlack.netlify.app/' target='_blank' rel="noopener noreferrer">Visitar sitio</a><br />
                                <a href='https://github.com/nds-fsd/slack' target='_blank' rel="noopener noreferrer">Repositorio</a>
                            </>
                            : <>
                                <p className={styles.frase}>I developed a small chat demo with websocket connection in the team project. The library used is Socket.io for both front and back-end, and the components are built
                                    with ReactJS. The server is built with ExpressJS, and MongoDB and Mongoose are used as the connection library. This small chat works as follows: the message is sent from the client to our server,
                                    which saves it in the database through an endpoint and emits a socket with an event that the subscribed client will listen to. Then, the list of messages is parsed, and a record of them is kept
                                    in the database. This is why we use a database.

                                </p>
                                <a href='https://skuadlack.netlify.app/' target='_blank' rel="noopener noreferrer">Go to the site</a><br />
                                <a href='https://github.com/nds-fsd/slack' target='_blank' rel="noopener noreferrer">Repository</a>
                            </>
                        }
                    </div>

                </div>
                <div className={styles.cards}>
                    <video src={todoApp} type="video/mp4" autoPlay loop muted controls />
                    <div className={styles.description}>
                        <h3>My To-Do App</h3>
                        {getIdioma()
                            ? <>
                                <p className={styles.frase}>My To-Do App es uno de los primeros retos que desarrolle en el bootcamp, usando para la parte front-end, componentes funcionales mediante ReactJS, y para la parte back-end una pequeña
                                    API REST de ExpressJS, con conexión a un contenedor de docker con bbdd de Mongo y Mongoose como libreria de conexión contra esta.</p>
                                <a href='https://github.com/JorgeCCuaresma/todoApp' target='_blank' rel="noopener noreferrer">Repositorio</a>
                            </>
                            : <>
                                <p className={styles.frase}>My To-Do App is one of the first challenges I developed in the bootcamp, using functional components in ReactJS for the front-end and a small ExpressJS REST API for the back-end. It is
                                    connected to a Mongo database container through Docker, and Mongoose is used as the connection library for the database.</p>
                                <a href='https://github.com/JorgeCCuaresma/todoApp' target='_blank' rel="noopener noreferrer">Repository</a>
                            </>
                        }
                    </div>
                </div>

                <div className={styles.cards}> </div>
            </div>
        </div>
    )
}


export default Projects