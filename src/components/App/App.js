import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import styles from "./App.module.css";

const totalTime = 60;

class App extends React.Component {
    state = {
        selectedParagraph: "Hello World!",
        timerStarted: false,
        timeLeft: totalTime,
        words: 0,
        chars: 0,
        wpm: 0
    }

    render() {
        return (
            <div className={styles.app}>
                {/* nav selection */}
                <Nav/>
                {/* Landing page */}
                <Landing/>
                {/* Challenge Section */}
                <ChallengeSection
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    chars={this.state.chars}
                    wpm={this.state.wpm}
                    timeLeft={this.state.timeLeft}
                    timerStarted={this.state.timerStarted}
                />
                {/* Footer */}
                <Footer/>
            </div>
        );
    }
};

export default App;