import React from 'react'
import Score from './score'
export default function ScoreBoard({win,loss,tie}) {
    return (
        <div className="container scoreboard-box">
             <div className="board-row score-board row">
            <Score name={'Player'} val={win} />
            <Score name={'Tie'} val={tie} />
            <Score name={'Computer'} val={loss} />
        </div>
        </div>
       
    )
}
