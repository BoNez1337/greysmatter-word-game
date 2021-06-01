import { useState } from 'react';
import './Words.css';
import words from '../../assets/words.js';
import Timer from '../timer/Timer.js';
import Input from '../input/Input.js';
import Score from '../score/Score.js';
import Scoreboard from '../scoreboard/Scoreboard.js';

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
    let [timeLeft, setTimeLeft] = useState(120);
    let [anagram, setAnagram] = useState('');
    let [scoreboard, setScoreboard] = useState([]);
    let [twl, setTwl ] = useState(6);
    let newWord = () => setAnagram(getWord());
    let [gameStarted, setGameStart] = useState(false);
    let startGame = () => {
        setTimeLeft(120);
        props.setScore(0);
        setGameStart(true);
        newWord();
    };
    let quitGame = () => {
        setGameStart(false);
    }
    let restartGame = () => {
        if(props.score >= 15 && twl < 9) {
            setTwl(++twl);
        } else if (props.score <= 8 && twl > 4) {
            setTwl(--twl);
        }
        console.log('restart: ' + twl);
        setScoreboard([...scoreboard, [props.score]]);
        startGame();
    }

    function getWord() {
        console.log('getword: ' + twl);

        currentWordArr = sortedWordsArray[twl][Math.floor(Math.random() * sortedWordsArray[twl].length)];
        currentWord = currentWordArr[Math.floor(Math.random() * currentWordArr.length)];
        return currentWord.anagram;
    }

    return (
        <div className="gm-words">
            { gameStarted ? <Timer started={gameStarted} timeLeft={timeLeft} setTimeLeft={setTimeLeft} /> : null }
            <div className="gm-buttons">
                { !gameStarted ? <button type="button" onClick={startGame}>Start</button> : null }
                { gameStarted && timeLeft == 0 ? <button type="button" onClick={restartGame}>Restart</button> : null }
                { gameStarted && timeLeft > 0 ? <button type="button" onClick={newWord}>Pass</button> : null }
                { gameStarted ? <button type="button" onClick={quitGame}>Quit</button> : null }
            </div>
            <p className="anagram">{ gameStarted ? anagram : null }</p>
            { gameStarted && timeLeft > 0 ? <Input currentWord={currentWord} currentWordArr={currentWordArr} setScore={props.setScore} score={props.score} newWord={newWord} quitGame={quitGame}/> : null }
            { gameStarted ? <Score score={props.score} /> : null }
            { gameStarted ? <Scoreboard scoreboard={scoreboard} /> : null }
        </div>
    )
}

export default Words
