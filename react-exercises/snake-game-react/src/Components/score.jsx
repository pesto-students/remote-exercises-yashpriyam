import React from 'react';
import '../App.css';


const Score = (props) => {
    return (
        <div className='score-div'>
            <h3>{`Your Score: ${props.gameScore}`}</h3>
        </div>
    )
}

export default Score;