import { useState } from 'react';
import './Score.css';

const Score = ({ score }) => {
    return (
        <div className="gm-score">
            <h3>Score: { score }</h3>
        </div>
    )
}

export default Score
