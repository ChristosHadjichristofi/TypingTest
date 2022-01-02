import React from 'react';
import styles from './ChallengeDetailsCard.module.css';

const ChallengeDetailsCard = ({ cardName, cardValue }) => {
    return (
        <div className={styles.details_card_container}>
            <div className={styles.card_name}>{cardName}</div>
            <div className={styles.card_value}>{cardValue}</div>
        </div>
    );
};

export default ChallengeDetailsCard;