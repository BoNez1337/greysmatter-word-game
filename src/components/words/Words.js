import React from 'react';
import './Words.css';
import words from '../../assets/words.js';
import Timer from '../timer/Timer.js';
import Input from '../input/Input.js';

let wordsArray = words.words;
let currentWord = '';

function sortWord(word) {
    return word.split("").sort().join("");
}

const Words = () => {
    const [gameStarted, setGameStart] = React.useState(false);
    const startGame = () => setGameStart(true);
    const quitGame = () => setGameStart(false);

    const [anagram, setAnagram] = React.useState(getWord());
    const newWord = () => setAnagram(getWord());


    function getWord() {
        console.log('gooo');
        currentWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
        return sortWord(currentWord);
    }

    function groupWords(arr, key) {
        let wordToSort;
        let index;
        let alreadySorted = [];
        let groupedWordsArray = [];
    
        for (let i = 0; i < arr.length; i++) {
            wordToSort = arr[i][key];
            index = alreadySorted.indexOf(wordToSort);
            if (index > -1) {
                groupedWordsArray[index].push(arr[i]);
            } else {
                alreadySorted.push(wordToSort);
                groupedWordsArray.push([arr[i]]);
            }
        }
        return groupedWordsArray.filter(v => v.length > 1);
    }

    return (
        <div className="gm-words">
            <Timer started={gameStarted}/>
            <div className="gm-buttons">
                { !gameStarted ? <button type="button" onClick={startGame}>Start</button> : null }
                { gameStarted ? <button type="button" onClick={newWord}>Pass</button> : null }
                { gameStarted ? <button type="button" onClick={quitGame}>Quit</button> : null }
            </div>
            <p>{ gameStarted ? anagram : null }</p>
            <Input anagram={anagram}/>
        </div>
    )
}

export default Words
