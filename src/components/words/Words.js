import { useState } from 'react';
import './Words.css';
import words from '../../assets/words.js';
import Input from '../input/Input.js';
import Score from '../score/Score.js';
import Scoreboard from '../scoreboard/Scoreboard.js';
import Timer from '../timer/Timer';

let wordsArray = words.words;
let currentWord = '';
let currentWordArr = [];

function sortWord(word) {
    return word.split("").sort().join("");
}

let sorted = sortWords();
let sortedWordsArray = groupWords(sorted, 'anagram');

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
    return sortByLength(groupedWordsArray);
}

function sortByLength(arr) {
    let sort = {
            "4": [],
            "5": [],
            "6": [],
            "7": [],
            "8": [],
            "9": [],
        };
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0].length > 3 && arr[i][0].length < 10) {
            sort[arr[i][0].length].push(arr[i]);
        }
    }
    return sort;
}

function sortWords() {
    let groups = [];
    for (let i = 0; i < wordsArray.length; i++) {
        groups.push({ original: wordsArray[i], anagram: sortWord(wordsArray[i]), length: wordsArray[i].length });
    }
    return groups;
}

const Words = (props) => {
    let [anagram, setAnagram] = useState('');
    let [scoreboard, setScoreboard] = useState([]);
    let [twl, setTwl ] = useState(6);
    let [gameStarted, setGameStart] = useState(false);
    let [timerStarted, setTimerStarted] = useState(false);
    const newWord = () => setAnagram(getWord());
    const startGame = () => {
        // props.setTimeLeft(120);
        props.setScore(0);
        setGameStart(true);
        setTimerStarted(true);
        newWord();
    };
    const quitGame = () => {
        setGameStart(false);
    }
    const restartGame = () => {
        if(props.score >= 15 && twl < 9) {
            setTwl(++twl);
        } else if (props.score <= 8 && twl > 4) {
            setTwl(--twl);
        }
        setScoreboard([...scoreboard, [props.score]]);
        startGame();
    }

    const getWord = () => {
        currentWordArr = sortedWordsArray[twl][Math.floor(Math.random() * sortedWordsArray[twl].length)];
        currentWord = currentWordArr[Math.floor(Math.random() * currentWordArr.length)];
        return currentWord.anagram;
    }

    return (
        <div className="gm-words">
            <div className="gm-buttons">
                { !gameStarted ? <button type="button" onClick={startGame}>Start</button> : null }
                { gameStarted && !timerStarted ? <button type="button" onClick={restartGame}>Restart</button> : null }
                { gameStarted && timerStarted ? <button type="button" onClick={newWord}>Pass</button> : null }
                { gameStarted ? <button type="button" onClick={quitGame}>Quit</button> : null }
            </div>
            { gameStarted && timerStarted ? <Timer timerStarted={timerStarted} setTimerStarted={setTimerStarted} /> : null }
            <p className="anagram">{ gameStarted ? anagram : null }</p>
            { gameStarted && timerStarted ? <Input currentWord={currentWord} currentWordArr={currentWordArr} setScore={props.setScore} score={props.score} newWord={newWord} quitGame={quitGame}/> : null }
            { gameStarted ? <Score score={props.score} /> : null }
            { gameStarted ? <Scoreboard scoreboard={scoreboard} /> : null }
        </div>
    )
}

export default Words
