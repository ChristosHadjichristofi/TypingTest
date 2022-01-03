import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import styles from "./App.module.css";

const totalTime = 60;
const apiURL = "http://metaphorpsum.com/paragraphs/1/9";

class App extends React.Component {
    state = {
        selectedParagraph: "",
        letters: [],
        timerStarted: false,
        timeLeft: totalTime,
        words: 0,
        chars: 0,
        wpm: 0
    }

    componentDidMount() {
        fetch(apiURL)
        .then(response => response.text())
        .then(paragraph => {
            this.setState({ selectedParagraph : paragraph })

            const paragraphArr = this.state.selectedParagraph.split("");
            const letters = paragraphArr.map(letter => {
                return {
                    letter: letter,
                    status: "not_attempted"
                }
            });

            this.setState({ letters : letters })
        });
    }

    handleUserInput = (inputValue) => {
        console.log(inputValue)
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
                    selectedParagraph = {this.state.selectedParagraph}
                    words = {this.state.words}
                    chars = {this.state.chars}
                    wpm = {this.state.wpm}
                    timeLeft = {this.state.timeLeft}
                    timerStarted = {this.state.timerStarted}
                    letters = {this.state.letters}
                    onInputChange = {this.handleUserInput}
                />
                {/* Footer */}
                <Footer/>
            </div>
        );
    }
};

export default App;