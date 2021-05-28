import React from 'react';
import './Input.css';

function checkWords(guess, wordArr) {
    let correct = false; 
    for (let i = 0; i < wordArr.length; i++) {
        if(guess == wordArr[i].original) {
            correct = true;
        }
    }
    return correct;
}

const Input = ({ currentWord, currentWordArr, setScore, score, newWord }) => {
    const [answer, setAnswer] = React.useState('')

    const submitWord = (e) => {
        e.preventDefault();
        if (!answer) {
            alert('Please Enter Guess');
        } else {
            if (checkWords(answer.toUpperCase(), currentWordArr)) {
                setScore(score => score + 1);
                setAnswer('');
                newWord();
            } else {
                alert('Incorrect');
            }
        }
    }

    return (
        <form className="gm-input" onSubmit={submitWord}>
            <div className="form-control">
                <input type="text" placeholder="Answer..." value={answer} onChange={(e) => setAnswer(e.target.value)}/>
            </div>
            <input type="submit" value="Enter"/>
        </form>
    )
}

export default Input
