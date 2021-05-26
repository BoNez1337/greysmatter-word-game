import React from 'react';
import './Timer.css';

const Timer = (props) => {
    let [timeLeft, setTimeLeft] = React.useState(120);

    function countdown() {
        if (props.started) {
            return setTimeLeft(timeLeft--);
        }
    }

    return (
        <div className="gm-timer">
            { props.started ? <h3>{ timeLeft }</h3> : null }
        </div>
    )
}
export default Timer
