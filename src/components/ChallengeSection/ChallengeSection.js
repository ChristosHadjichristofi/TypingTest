import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import styles from "./ChallengeSection.module.css";

const ChallengeSection = () => {
    return (
        <div className={styles.challenge_section_container}>
            <h1 data-aos="fade-down" className={styles.challenge_section_header}>
                Take a typing speed test right now!
            </h1>
            {/* Test Container */}
            <TestContainer words = {4} chars = {14} wpm = {42}/>
        </div>
    );
};

export default ChallengeSection;