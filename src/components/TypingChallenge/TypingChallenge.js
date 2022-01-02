import React from 'react';
import styles from './TypingChallenge.module.css';

const TypingChallenge = ({ selectedParagraph }) => {
    return (
        <div className={styles.typing_challenge}>
            <div className={styles.timer_container}>
            <p className={styles.timer}>00:60</p>
            <p className={styles.timer_info}>Start typing to start the test</p>
            </div>

            <div className={styles.textarea_container}>
                <div className={styles.textarea_left}>
                    <div className={` ${styles.textarea} ${styles.test_paragraph} `}>
                        {selectedParagraph}
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