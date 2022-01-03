import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import styles from './TypingChallengeContainer.module.css'

const TypingChallengeContainer = ({ selectedParagraph, words, chars, wpm, timeLeft, timerStarted, letters }) => {
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
                <TypingChallenge 
                    selectedParagraph = {selectedParagraph}
                    timerStarted = {timerStarted}
                    timeLeft = {timeLeft}
                    letters = {letters}
                />
            </div>

        </div>
    );
};

export default TypingChallengeContainer;