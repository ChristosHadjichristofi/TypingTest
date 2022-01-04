import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import styles from "./ChallengeSection.module.css";

const ChallengeSection = ({ selectedParagraph, words, chars, wpm, timeLeft, timerStarted, letters, onInputChange, restart }) => {

    return (
        <div className={styles.challenge_section_container}>
            <h1 data-aos="fade-down" className={styles.challenge_section_header}>
                Take a typing speed test right now!
            </h1>
            {/* Test Container */}
            <TestContainer 
                words = {words} 
                chars = {chars} 
                wpm = {wpm} 
                timeLeft = {timeLeft} 
                timerStarted = {timerStarted}
                selectedParagraph = {selectedParagraph}
                letters = {letters}
                onInputChange = {onInputChange}
                restart = {restart}
            />
        </div>
    );
};

export default ChallengeSection;