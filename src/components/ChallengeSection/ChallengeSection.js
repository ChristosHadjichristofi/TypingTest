import React from 'react';
import styles from "./ChallengeSection.module.css";

const ChallengeSection = () => {
    return (
        <div className={styles.challenge_section_container}>
            <h1 data-aos="fade-down" className={styles.challenge_section_header}>
                Take a typing speed test right now!
            </h1>            
        </div>
    );
};

export default ChallengeSection;