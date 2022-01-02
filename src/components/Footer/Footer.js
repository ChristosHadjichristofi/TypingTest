import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <a 
                href="https://www.youtube.com/watch?v=lNWKVmejuR0&list=PLGyA74h_S9NppHNrzUSjMQbnuHS9jlAcY"
                className={styles.footer_link}
                target="_blank"
                rel="noreferrer"
            >
                Tutorial followed
            </a>
            
        </div>
    );
};

export default Footer;