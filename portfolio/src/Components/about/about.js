import React from "react";
import styles from './about.module.css'
import Image from 'react-bootstrap/Image'
import myphoto from '../../assets/myphoto.jpeg'
import ModalAbout from "../modalAbout/modalAbout";


const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerImage}>
                <Image className={styles.image} src={myphoto} height='250' />
                <div className={styles.title}>
                    <h2>Hi, I'm Jorge Cuesta and I'm full stack developer junior.</h2>
                    <ModalAbout />
                </div>
            </div>
        </div>
    )
};

export default About;