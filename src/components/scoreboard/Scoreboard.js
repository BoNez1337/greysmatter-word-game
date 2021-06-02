import './Scoreboard.css';

const Scoreboard = ({ scoreboard }) => {
    return (
        <div className="gm-scoreboard">
            <h3>Scoreboard</h3>
            { scoreboard.map(score => (
                <p>{ score }</p>
            )) }
        </div>
    )
}

export default Scoreboard
