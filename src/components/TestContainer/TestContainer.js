import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import styles from "./TestContainer.module.css";

const TestContainer = ({ words, chars, wpm }) => {
    return (
        <div className={styles.test_container}>
            <div data-aos="fade-up" className={styles.typing_challenge_content}>
                <TypingChallengeContainer words = {words} chars = {chars} wpm = {wpm}/>
            </div>
            {/* <div className={styles.try_again_container}>
                <TryAgain words = {words} chars = {chars} wpm = {wpm}/>
            </div> */}
        </div>
    );
};

export default TestContainer;