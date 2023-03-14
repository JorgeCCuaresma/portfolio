import styles from './skills.module.css'
import react from '../../assets/react.png'
import express from '../../assets/express.png'
import node from '../../assets/nodejs.png'
import mongodb from '../../assets/mongodb.png'
import javascript from '../../assets/javaScript.png'
import typescript from '../../assets/typescript.png'
import insomnia from '../../assets/Insomnia-Logo-1.png'
import docker from '../../assets/docker.png'
import mongoose from '../../assets/mongoose.png'
import socket from '../../assets/socket.png'


const Skills = () => {

    return (
        <div className={styles.container}>

            <div className={styles.title}>
                <h1>Skills</h1>
                <p>Technologies</p>
            </div>
            <div className={styles.containerCards}>
                <div>
                    <div className={styles.card}>
                        <img src={react} />
                        <p>ReactJS</p>
                    </div>
                    <div className={styles.card}>
                        <img src={express} />
                        <p>ExpressJS </p>
                    </div>
                </div>
                <div>
                    <div className={styles.card}>
                        <img src={node} />
                        <p>NodeJS </p>
                    </div>
                    <div className={styles.card}>
                        <img src={mongodb} />
                        <p>MongoDB</p>
                    </div>
                </div>
                <div>
                    <div className={styles.card}>
                        <img src={javascript} />
                        <p>JavaScript</p>
                    </div>
                    <div className={styles.card}>
                        <img src={typescript} />
                        <p>TypeScript</p>
                    </div>
                </div>
                <div>
                    <div className={styles.card}>
                        <img src={insomnia} />
                        <p>Insomnia </p>
                    </div>
                    <div className={styles.card}>
                        <img src={docker} />
                        <p>Docker </p>
                    </div>
                </div>
                <div className={styles.groupCard}>
                    <div className={styles.card}>
                        <img src={mongoose} />
                        <p>Mongoose </p>
                    </div>
                    <div className={styles.card}>
                        <img src={socket} />
                        <p>Socket.IO </p>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Skills;