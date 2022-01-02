import React from 'react';
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

            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default App;