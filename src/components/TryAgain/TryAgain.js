import React from 'react';
import styles from "./TryAgain.module.css";

const TryAgain = ({ words, chars, wpm }) => {
    return (
        <div className={styles.try_again_container}>
            <h1>Results</h1>
            <div className={styles.result_container}>
                <p> <b>Characters:</b> {words} </p>
                <p> <b>Words:</b> {chars} </p>
                <p> <b>Speed:</b> {wpm} wpm </p>
            </div>

            <div>
                <button className={`${styles.end_buttons} ${styles.start_again_btn} `}>Retry</button>
                <button 
                    onClick={() => {
                        window.open("https://www.facebook.com/sharer/sharer.php?u=Check!", "facebook-share-dialog", "width=800, height=600")
                    }}
                    className={`${styles.end_buttons} ${styles.fb_btn} `}
                >
                    Facebook
                </button>
                <button 
                    onClick={() => {
                        window.open("https://www.twitter.com/intent/tweet?text=Check!", "Twitter", "width=800, height=600")
                    }}
                    className={`${styles.end_buttons} ${styles.tweet_btn} `}
                >
                    Twitter
                </button>
            </div>
        </div>
    );
};

export default TryAgain;