import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import styles from "./TestContainer.module.css";

const TestContainer = ({ selectedParagraph, words, chars, wpm, timeLeft, timerStarted, letters, onInputChange, restart }) => {

    return (
        <div className={styles.test_container}>
            {
                timeLeft > 0 ? (
                    <div className={styles.typing_challenge_content}>
                        <TypingChallengeContainer 
                            words = {words} 
                            chars = {chars} 
                            wpm = {wpm} 
                            timeLeft = {timeLeft} 
                            timerStarted = {timerStarted}
                            selectedParagraph = {selectedParagraph}
                            letters = {letters}
                            onInputChange = {onInputChange}
                        />
                    </div>
                )
                : (
                    <div className={styles.try_again_container}>
                        <TryAgain 
                            words = {words} 
                            chars = {chars} 
                            wpm = {wpm}
                            restart = {restart}
                        />
                    </div>
                )
            }
        </div>
    );
};

export default TestContainer;