import React from 'react';
import './Input.css';
import PropTypes from 'prop-types'


const Input = ({ currentWord }) => {
    const [answer, setAnswer] = React.useState('')

    const submitWord = (e) => {
        e.preventDefault();
        if (!answer) {
            alert('Please Enter Guess');
        } else {
            setAnswer('');
        }
        console.log(currentWord);
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

Input.propTypes = {
    currentWord: PropTypes.object,
}

export default Input
