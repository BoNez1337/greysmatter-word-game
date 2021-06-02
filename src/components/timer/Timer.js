import { useEffect, useState } from 'react';
import './Timer.css';

const Timer = (props) => {
    let [timeLeft, setTimeLeft] = useState(120);

    useEffect(() => {
        if (timeLeft > 0) {
            setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else {
            props.setTimerStarted(false);
        }
      }, [timeLeft]);

    return (
        <div className="gm-timer">
            <h3>{ timeLeft > 0 ? timeLeft : 'TIME UP' }</h3>
        </div>
    )
}

export default Timer
