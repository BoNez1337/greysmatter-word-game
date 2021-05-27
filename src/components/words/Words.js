import React from 'react';
import './Words.css';
import words from '../../assets/words.js';
import Timer from '../timer/Timer.js';
import Input from '../input/Input.js';

let wordsArray = words.words;
let currentWord = '';
let currentWordArr = [];

function sortWord(word) {
    return word.split("").sort().join("");
}

const Words = () => {
    let sorted = sortWords();
    let sortedWordsArray = groupWords(sorted, 'anagram');
    let [anagram, setAnagram] = React.useState(getWord());
    let newWord = () => setAnagram(getWord());
    let [gameStarted, setGameStart] = React.useState(false);
    let startGame = () => {
        setGameStart(true);
    };
    let quitGame = () => setGameStart(false);


    function getWord() {
        currentWordArr = sortedWordsArray[Math.floor(Math.random() * sortedWordsArray.length)];
        currentWord = currentWordArr[Math.floor(Math.random() * currentWordArr.length)];
        return currentWord.anagram;
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
        return groupedWordsArray;
    }

    function sortWords() {
        let groups = [];
        for (let i = 0; i < wordsArray.length; i++) {
            groups.push({ original: wordsArray[i], anagram: sortWord(wordsArray[i]) });
        }
        return groups;
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
            { gameStarted ? <Input anagram={currentWord} /> : null }
        </div>
    )
}

export default Words
