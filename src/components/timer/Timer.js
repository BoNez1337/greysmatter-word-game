import { useEffect } from 'react';
import './Timer.css';

const Timer = ({ timeLeft, setTimeLeft }) => {
    useEffect(() => {
        timeLeft > 0 && setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      }, [timeLeft]);

    return (
        <div className="gm-timer">
            <h3>{ timeLeft > 0 ? timeLeft : 'TIME UP' }</h3>
        </div>
    )
}

export default Timer
