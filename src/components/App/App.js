import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import styles from "./App.module.css";

const App = () => {
    return (
        <div className={styles.app}>
            {/* nav selection */}
            <Nav/>
            {/* Landing page */}
            <Landing/>
            {/* Challenge Section */}
            <ChallengeSection/>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default App;