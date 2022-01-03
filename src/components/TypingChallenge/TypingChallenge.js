import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import styles from './TypingChallenge.module.css';

const TypingChallenge = ({ selectedParagraph, timeLeft, timerStarted, letters }) => {
    return (
        <div className={styles.typing_challenge}>
            <div className={styles.timer_container}>
            <p className={styles.timer}>
                00: {timeLeft < 10 ? '0' + timeLeft : timeLeft}
            </p>
            <p className={styles.timer_info}>
                {!timerStarted && "Start typing to start the test"}
            </p>
            </div>

            <div className={styles.textarea_container}>
                <div className={styles.textarea_left}>
                    <div className={` ${styles.textarea} ${styles.test_paragraph} `}>
                        {
                            letters.map(letterInfo => {
                                return <TestLetter letterInfo = { letterInfo }/>
                            })
                        }
                    </div>
                </div>
                <div className={styles.textarea_right}>
                    <textarea className={styles.textarea} placeholder="Start typing here..."></textarea>
                </div>
            </div>
        </div>
    );
};

export default TypingChallenge;