import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ChristmasCardPage from './components/ChristmasCardPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/card" element={<ChristmasCardPage email="recipient's email" message="Custom message from form"/>}/>
            </Routes>
        </Router>
    );
};

export default App;
