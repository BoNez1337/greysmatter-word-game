import React from 'react';
import './Timer.css';
import PropTypes from 'prop-types'

const Timer = ({ started }) => {
    let [timeLeft, setTimeLeft] = React.useState(120);
    // let timer = setInterval(countDown(), 1000);

    // function countDown() {
    //     if (started && timeLeft > 0) {
    //         setTimeLeft(timeLeft--)
    //     } else if (timeLeft == 0) {
    //         alert("Time's Up!!!");
    //         clearInterval(timer);
    //     }
    // }

    return (
        <div className="gm-timer">
            { started ? <h3>{ timeLeft }</h3> : null }
        </div>
    )
}

Timer.propTypes = {
    started: PropTypes.bool
}
export default Timer
