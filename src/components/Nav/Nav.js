import React from 'react';
import styles from "./Nav.module.css";
import logo from './../../assets/logo.png';

const Nav = () => {
    return (
        <div className={styles.nav_container}>
            <div className={styles.nav_left}>
                <img className={styles.flashlogo} src={logo} alt="logo"/>
                <p className={styles.flashlogo_text}>TypingTest</p>
            </div>
            <div className={styles.nav_right}>
                <a
                target={"_blank"}
                className={styles.navlink}
                href="https://github.com/ChristosHadjichristofi"
                rel="noreferrer"
                >GitHub</a>
            </div>
        </div>
    );
};

export default Nav;