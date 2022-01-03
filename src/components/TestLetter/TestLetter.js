import React from 'react';
import styles from './TestLetter.module.css';

const TestLetter = ({ letterInfo }) => {
    const { status } = letterInfo;
    const statusClass = "test_letter_" + status;

    return (
        <span className={`${styles.test_letter} ${styles[statusClass]}`}>{ letterInfo.letter }</span>
    );
};

export default TestLetter;