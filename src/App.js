// src/App.js
import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="curve-top-right"></div>
            <div className="curve-bottom-left"></div>
            <div className="balloon"></div>
            <div className="balloon"></div>
            <div className="balloon"></div>
            <div className="balloon"></div>
            <div className="balloon"></div>
            <div className="balloon"></div>
            <ProfileCard />
        </div>
    );
}

export default App;
