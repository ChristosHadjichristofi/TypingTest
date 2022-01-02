import React from 'react';
import styles from "./Landing.module.css";
import flash from "./../../assets/hero.png";

const Landing = () => {
    return (
        <div className={styles.landing_container}>
            <div className={styles.landing_left}>
                <h1 className={styles.landing_header}>Can you type...</h1>
                <div className={styles.typewriter_container}>
                    <p>Fast?</p>
                    <p>Correct?</p>
                    <p>Quick?</p>
                </div>
            </div>
            <div className={styles.landing_right}>
                <img className={styles.flashimg} src={flash} alt="hero"></img>
            </div>
        </div>
    );
};

export default Landing;