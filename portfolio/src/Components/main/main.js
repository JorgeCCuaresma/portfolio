import React from "react";
import styles from './main.module.css'
import Image from 'react-bootstrap/Image'
import myphoto from '../../assets/photo.jpg'
import ModalAbout from "../modalAbout/modalAbout";
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'


const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerCard}>
                <div className={styles.containerImage}>
                    <Image className={styles.image} src={myphoto} />
                </div>
                <div className={styles.title}>
                    <div className={styles.card}>
                        <div  className={styles.titles}>
                            <h4 className={styles.titleh4}>Jorge Cuesta</h4>
                            <h2 className={styles.titleh2}><span className={styles.span}>I'm</span> Full Stack Developer</h2>
                        </div>
                        <div className={styles.frase}>
                        <p>Welcome to my corner of the internet. I'm an enthusiast of technology and all its surroundings. I invite you to take a look at my portfolio.</p>
                        </div>
                        <div className={styles.containerIcons}>
                        <a className={styles.iconGit} href="https://github.com/JorgeCCuaresma" target='_blank'><img src={github} height='30' /></a>
                        <a  className={styles.iconGit}href="https://www.linkedin.com/in/jorge-cuesta-cuaresma" target='_blank'><img src={linkedin} height='30'></img></a>
                        </div>
                    </div>
                    <div className={styles.modal}>
                        <ModalAbout />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;