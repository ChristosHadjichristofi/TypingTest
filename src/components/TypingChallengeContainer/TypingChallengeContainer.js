import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import styles from './TypingChallengeContainer.module.css'

const TypingChallengeContainer = ({ words, chars, wpm }) => {
    return (
        <div className={styles.typing_challenge_container}>
            {/* Details Section */}
            <div className={styles.details_container}>
                {/* Words Typed */}
                <ChallengeDetailsCard cardName={"Words"} cardValue={words}/>
                {/* Chars Typed */}
                <ChallengeDetailsCard cardName={"Characters"} cardValue={chars}/>
                {/* WPM - Speed */}
                <ChallengeDetailsCard cardName={"Speed"} cardValue={wpm}/>
            </div>
            {/* Typing Challenge Section */}
            <div className={styles.typewriter_container}>
                <h1>Lets see how that rolls</h1>
            </div>

        </div>
    );
};

export default TypingChallengeContainer;