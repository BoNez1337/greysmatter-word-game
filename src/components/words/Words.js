import React from 'react';
import './Words.css';
import words from '../../assets/words.js';

let wordsArray = words.words;
let currentWord = '';

function getWord(arr) {
    currentWord = sortWord(arr[Math.floor(Math.random() * arr.length)]);
}

function sortWord(word) {
    return word.split("").sort().join("");
}

const Words = () => {
    const [gameStarted, setGameStart] = React.useState(false);
    const startGame = () => setGameStart(true);
    const quitGame = () => setGameStart(false);
    return (
        <div className="gm-words">
            <div className="gm-buttons">
                { !gameStarted ? <button type="button" onClick={startGame}>Start</button> : null }
                <button type="button" onClick={() => { startGame() }}>Enter</button>
                <button type="button" onClick={() => { getWord(wordsArray) }}>Pass</button>
                { gameStarted ? <button type="button" onClick={quitGame}>Quit</button> : null }
            </div>
            <p>{ currentWord }</p>
        </div>
    )
}

// const StartButton = () => (
//     <button type="button" onClick={onClick}>Start</button>
// )

export default Words
