import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import styles from "./App.module.css";
import { SAMPLE_PARAGRAPHS } from "../../data/sampleParagraphs";

const totalTime = 60;
const apiURL = "http://metaphorpsum.com/paragraphs/1/9";
const defaultState = {
    selectedParagraph: "",
    letters: [],
    timerStarted: false,
    timeLeft: totalTime,
    words: 0,
    chars: 0,
    wpm: 0
};

class App extends React.Component {
    state = defaultState;

    fetchParagraph = () => {
        fetch(apiURL)
        .then(response => response.text())
        .then(paragraph => {
            const paragraphArr = paragraph.split("");
            const letters = paragraphArr.map(letter => {
                return {
                    letter: letter,
                    status: "not_attempted"
                }
            });

            this.setState({ ...defaultState, letters: letters, selectedParagraph: paragraph });
        });
    };

    fetchFallbackParagraph = () => {
        const paragraph = SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ];

        const paragraphArr = paragraph.split("");
        const letters = paragraphArr.map(letter => {
            return {
                letter: letter,
                status: "not_attempted"
            }
        });

        this.setState({ ...defaultState, letters: letters, selectedParagraph: paragraph });
    }

    componentDidMount() {
        this.fetchFallbackParagraph();
    };

    handleUserInput = (inputValue) => {
        if (!this.state.timerStarted) this.startTimer();

        const chars = inputValue.length;
        const words = inputValue.split(" ").filter(i => i).length;
        const index = chars - 1;

        /** logic was followed from the tutorial
         *  1. Fixed when ctrl + a and delete all to make them not_attempted
         *  TODO:
         *  1. When ctrl + backspace to make the letters of the word deleted not_attempted
         */
        if (index < 0) {
            
            const letters = this.state.letters;
            letters.forEach(letter => {
                letter.status = "not_attempted";
            });

            this.setState({
                chars: chars,
                words: words
            });

            return;
        }

        if (index >= this.state.selectedParagraph.length) {
            this.setState({
                chars: chars,
                words: words
            });

            return;
        }

        const letters = this.state.letters;
        if (!(index === this.state.selectedParagraph.length - 1)) letters[index + 1].status = "not_attempted";
        else {
            this.setState({ chars: chars, words: words, timeLeft: 0 });
            return;
        }
        
        const isCorrect = inputValue[index] === letters[index].letter;
        letters[index].status = isCorrect ? "correct" : "incorrect";

        this.setState({ letters: letters, words: words, chars: chars })
    };
    
    startTimer = () => {
        this.setState({ timerStarted : true });
        const timer = setInterval(() => {
            if (this.state.timeLeft > 0) {
                // calc wpm
                const timeSpent = totalTime - this.state.timeLeft;
                const wpm = timeSpent > 0 ? (this.state.words / timeSpent) * totalTime : 0;
                // renue time left
                this.setState({ timeLeft : this.state.timeLeft - 1, wpm : parseInt(wpm) })
            }
            else clearInterval(timer);
        }, 1000);
    };

    restart = () => {
        this.fetchFallbackParagraph();
    };

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
                    restart = {this.restart}
                />
                {/* Footer */}
                <Footer/>
            </div>
        );
    }
};

export default App;